from pymongo import MongoClient, GEOSPHERE

def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db['val']
    return collection

if __name__ == '__main__':

    mode = 'val'
    db_name = 'geovisuals_bdd'
    collection = connect_db(mode, db_name)

    try:
        response = collection.create_index([("locations", GEOSPHERE)])
        print ("index response:", response)
    except Exception as e:
        print(e)