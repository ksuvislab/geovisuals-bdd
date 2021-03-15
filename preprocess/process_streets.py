from os import listdir
import json
from pymongo import MongoClient
import urllib2

map_access_token = 'pk.eyJ1IjoiZGlnaXRhbGtpIiwiYSI6ImNqNXh1MDdibTA4bTMycnAweDBxYXBpYncifQ.daSatfva2eG-95QHWC9Mig';

def connect_db(db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['streets']
    return collection

if __name__ == '__main__':

    db_name = 'geovisuals_bdd'
    collection = connect_db(db_name)

    try:

        cursor = collection.find({})
        trips = []
        for document in cursor:
            trips.append(document)
        cursor.close()
        print('Get total ' + str(len(trips)) + ' streets')

        for trip in trips:
            print(str(trip['trip_id']))

    except Exception as e:
        print(e)