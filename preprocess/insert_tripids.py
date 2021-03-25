from os import listdir
import json
from pymongo import MongoClient

def connect_db(mode, db_name, collection_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db[collection_name]
    return collection

def get_index(streets, name):
    pos = -1
    for index, item in enumerate(streets):
        if item['name'] == name:
            pos = index
            return pos
    return pos

if __name__ == '__main__':

    mode = 'train' # edit
    db_name = 'geovisuals_bdd'
    collection_name = 'street'
    collection = connect_db(mode, db_name, collection_name)

    try:
        cursor = collection.find({
            'trip_id': {'$exists': True}
        })
        streets = []
        for document in cursor:
            streets.append(document)
        cursor.close()

        all_streets = []

        for street in streets:
            trip_id = street['trip_id']
            for matching in street['matchings']:
                for name in matching['street_names']:
                    if name != '':
                        pos = get_index(all_streets, name)
                        if pos != -1:
                            all_streets[pos]['tripids'].append(trip_id)
                        else:
                            new_street = {}
                            new_street['name'] = name
                            new_street['tripids'] = []
                            new_street['tripids'].append(trip_id)
                            all_streets.append(new_street)


        road_network_collection = connect_db('train', 'geovisuals_bdd', 'road_network')

        for street in all_streets:
            try:
                res = road_network_collection.update({
                        'name': street['name']
                },{
                    '$set':{
                        'trip_ids': street['tripids']
                    }
                }, upsert=True, multi=False)
                print('Update response: ', res)
            except Exception as e:
                print(e)

    except Exception as e:
        print(e)