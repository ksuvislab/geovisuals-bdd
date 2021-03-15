from os import listdir
import json
from pymongo import MongoClient
import urllib2

map_access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';

def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db[mode]
    return collection

def mapbox_mapmatch_api(coordinates, radiuses, profile):

    url = 'https://api.mapbox.com/matching/v5/mapbox/' + profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + map_access_token;
    contents = urllib2.urlopen(url).read()
    return contents


if __name__ == '__main__':

    mode = 'train' # Edit
    db_name = 'geovisuals_bdd'
    collection = connect_db(mode, db_name)

    try:

        cursor = collection.find({})
        trips = []
        for document in cursor:
            trips.append(document)
        cursor.close()
        print('Get total ' + str(len(trips)) + ' trips')

        streets = []
        count = 0

        for trip in trips:
            trip_id = trip['trip_id']
            if 'locations' in trip:
                locations = trip['locations']['coordinates']
                coords = []
                radius = []
                for coord in locations:
                    coords.append(str(coord[0]) + ',' + str(coord[1]))
                    radius.append(str(25))

                profile = 'driving'
                coords = ';'.join(coords)
                radius = ';'.join(radius)

                contents = json.loads(mapbox_mapmatch_api(coords, radius, profile))
                contents['trip_id'] = trip_id

                new_data = {}
                new_data['trip_id'] = trip_id
                # Process trace points
                new_data['tracepoints_coords'] = []

                if 'tracepoints' in contents and contents['tracepoints'] is not None:
                    for trace_point in contents['tracepoints']:
                        if trace_point is not None:
                            if 'location' in trace_point:
                                new_data['tracepoints_coords'].append(trace_point['location'])
                # Get matchings
                new_data['matchings'] = []
                if 'matchings' in contents and contents['matchings'] is not None:
                    for matching in contents['matchings']:
                        match_data = {}
                        if matching is not None:
                        # Get geometry
                            if 'geometry' in matching:
                                match_data['geometry'] = matching['geometry']
                            else:
                                match_data['geometry'] = {}
                        # Get uniques street name
                            match_data['street_names'] = []
                            if 'legs' in matching:
                                for leg in matching['legs']:
                                    if 'steps' in leg:
                                        for step in leg['steps']:
                                            if step['name'] is not None and step['name'] not in match_data['street_names']:
                                                match_data['street_names'].append(step['name'])

                        new_data['matchings'].append(match_data)

                streets.append(new_data)
                count = count + 1
                if count % 1000 == 0:
                    collection_2 = connect_db('street', db_name)
                    collection_2.insert_many(streets)
                    print('Finish inserting: ' + str(count) + ' streets')
                    del streets[:]



        '''
        for document in cursor:
            trip_id = document['trip_id']
            if 'locations' in document:

                locations = document['locations']['coordinates']
                coords = []
                radius = []
                for coord in locations:
                    coords.append(str(coord[0]) + ',' + str(coord[1]))
                    radius.append(str(25))

                profile = 'driving'
                coords = ';'.join(coords)
                radius = ';'.join(radius)

                contents = json.loads(mapbox_mapmatch_api(coords, radius, profile))
                contents['trip_id'] = trip_id
                try:
                    collection_2 = connect_db('streets', db_name)
                    collection_2.insert_one(contents)
                    print('Finish inserting map matching trip id: ' + str(trip_id))
                except Exception as e:
                    print(e)

                """
                try:
                    res = collection.update({
                        'trip_id': trip_id
                    }, {
                        '$set': {
                            'map_matching': json.loads(contents)
                        }
                    }, upsert=True, multi=False)
                    print('Finish inserting map matching trip id: ' + str(trip_id))
                except Exception as e:
                    print(e)
            '''

    except Exception as e:
        print(str(e))

# TO DELETE
#cursor = collection.update({ 'map_matching': { '$exists': True }}, { '$unset': { 'map_matching': 1 }}, multi=True)