from os import listdir
from os.path import isfile, join
import json
from pymongo import MongoClient, GEOSPHERE
from progress.bar import Bar
from datetime import datetime
from geojson import LineString, Feature

# Info datasets
bdd_train_info = '../data/bdd100k/info/100k/train/'
bdd_val_info = '../data/bdd100k/info/100k/val/'

# Labels datasets
bdd_train_labels = '../data/bdd100k/labels/bdd100k_labels_images_train.json'
bdd_val_labels = '../data/bdd100k/labels/bdd100k_labels_images_val.json'

def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db['val']
    return collection

def get_labels(mode):

    file_path = bdd_train_labels if mode == 'train' else bdd_val_labels

    with open(file_path) as json_file:
        data = json.load(json_file)
        points = []
        for item in data:
            point = {}
            # Get id, image, and other attributes
            point['video_name'] = item['videoName']
            point['image'] = item['name']
            point['index'] = item['index']
            point['time_of_day'] = item['attributes']['timeofday']
            point['weather'] = item['attributes']['weather']
            point['scene'] = item['attributes']['scene']
            # Count all category from each point
            segments = []
            labels = item['labels']

            if not (labels is None):
                for label in labels:
                    label_object = {}
                    label_object['category'] = label['category']
                    label_object['box2d'] = label['box2d']
                    segments.append(label_object)

            point['segments'] = segments
            points.append(point)
        return points

def get_infos(mode):
    # Create directory path
    directory_path = bdd_train_info if mode == 'train' else bdd_val_info

    progress_bar = Bar('Collecting all trips: ', suffix='%(percent)d%%', max=len(listdir(directory_path)))

    trips = []

    for file_name in listdir(directory_path):
        gps_file = directory_path + file_name
        gps_point = {}
        with open(gps_file) as json_file:
            try:
                data = json.load(json_file)
                gps_point['trip_id'] = file_name.split('.')[0]

                if 'locations' in data and len(data['locations']) != 0:
                    gps_point = extract_gps(gps_point, data, 'locations')

                elif 'gps' in data and len(data['gps']) != 0:
                    gps_point = extract_gps(gps_point, data, 'gps')

                trips.append(gps_point)
                progress_bar.next()
            except Exception as e:
                pass

    progress_bar.finish()
    return trips

def extract_gps(gps_data, data, gps_type):

    # Extract date time
    start_datetime = data[gps_type][0]['timestamp']
    end_datetime = data[gps_type][len(data[gps_type]) - 1]['timestamp']
    gps_data['start_timestamp'] = start_datetime
    gps_data['end_timestamp'] = end_datetime
    gps_data['video_file'] = data['filename']

    points = []
    speeds = []
    timestamps = []

    # Extract trajectory points
    for point in data[gps_type]:
        points.append((point['longitude'], point['latitude']))
        speeds.append(point['speed'])
        timestamps.append(point['timestamp'])

    gps_data['locations'] = LineString(points)
    gps_data['speeds'] = speeds
    gps_data['timestamps'] = timestamps

    return gps_data



if __name__ == '__main__':

    mode = 'train'
    # Connect to mongodb
    db_name = 'geovisuals_bdd'
    collection = connect_db(mode, db_name)

    labels = get_labels(mode)
    infos = get_infos(mode)

    # Print total trips
    print('Done collecting ' + str(len(infos)) + ' infos')
    progress_bar = Bar('Adding record data: ', suffix='%(percent)d%%', max=len(infos))

    for info in infos:
        label_data = next((x for x in labels if x['video_name'] == info['trip_id']), None)

        info['time_of_day'] = None
        info['weather'] = None
        info['scene'] = None
        info['image'] = None
        info['segments'] = None
        info['frame_index'] = None

        if label_data is not None:
            info['time_of_day'] = label_data['time_of_day']
            info['weather'] = label_data['weather']
            info['scene'] = label_data['scene']
            info['image'] = label_data['image']
            info['segments'] = label_data['segments']
            info['frame_index'] = label_data['index']

        # Insert trip to mongodb
        try:
            collection.insert_one(info)
            res = collection.create_index([('locations', GEOSPHERE)])
            print('index response:', res)
        except Exception as e:
            print(e)

        progress_bar.next()
    progress_bar.finish()



