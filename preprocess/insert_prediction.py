from os import listdir
import json
from pymongo import MongoClient

prediction_output = '../data/prediction_output/' # Edit

def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db['val']
    return collection

if __name__ == '__main__':

    mode = 'train' # Edit
    db_name = 'geovisuals_bdd'
    collection = connect_db(mode, db_name)

    for file_name in listdir(prediction_output):
        trip_id = file_name.split('.')[0]
        output_file = prediction_output  + file_name
        with open(output_file) as json_file:
            try:
                output_data = json.load(json_file)
                tcnn1 = output_data['tcnn1'] if 'tcnn1' in output_data else []
                cnn_lstm = output_data['cnn_lstm'] if 'cnn_lstm' in output_data else []
                fcn_lstm = output_data['fcn_lstm'] if 'fcn_lstm' in output_data else []

                try:
                    res = collection.update({
                        'trip_id': trip_id
                    },{
                        '$set':{
                            'predict.tcnn1': tcnn1,
                            'predict.cnn_lstm': cnn_lstm,
                            'predict.fcn_lstm': fcn_lstm
                        }
                    }, upsert=True, multi=False)
                    print('Update response: ', res)
                    print(trip_id)
                except Exception as e:
                    print('error: ' + str(e))

            except Exception as e:
                print('error: ' + str(e))