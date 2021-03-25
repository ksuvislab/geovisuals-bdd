import fiona
import pprint
import json
from pymongo import MongoClient
from geojson import Point, Feature, FeatureCollection, dump


def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db[mode]
    return collection

def get_index(name, roads):
    return next((index for (index, d) in enumerate(roads) if d['name'] == name), None)

with fiona.open('new-york-latest-free/gis_osm_roads_free_1.shp') as src:

    db_name = 'geovisuals_bdd'
    roads = []
    count = 0
## 371.50
    for s in src:
        name = s['properties']['name']
        max_speed = s['properties']['maxspeed']
        geometry = s['geometry']

        if name != None:
            #d = dict((i['name'], i['features']) for i in roads)
            index = get_index(name, roads)
            if index != None:
                roads[index]['features'].append(Feature(geometry=geometry, properties={"name": name, 'speed_limit': max_speed }))
            else:
                new_road = {}
                new_road['name'] = name
                new_road['features'] = []
                new_road['features'].append(Feature(geometry=geometry, properties={"name": name, 'speed_limit': max_speed }))
                roads.append(new_road)

            count = count + 1
            if count % 1000 == 0:
                print('Already process: ' + str(count) + ' roads')

    count = 0
    insert_roads = []
    for r in roads:
        insert_roads.append(r)
        count = count + 1
        if count % 1000 == 0:
            collection = connect_db('road_network', db_name)
            collection.insert_many(insert_roads)
            print('Finish inserting: ' + str(count) + ' roads')
            del insert_roads[:]