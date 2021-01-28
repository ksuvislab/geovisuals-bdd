from os import listdir
from os.path import isfile, join
import json
import extcolors
from pymongo import MongoClient
from progress.bar import Bar
from datetime import datetime

# Info datasets
bdd_train_info = '../bdd100k/info/100k/train/'
bdd_val_info = '../bdd100k/info/100k/val/'

# Labels datasets
bdd_train_labels = '../bdd100k/labels/bdd100k_labels_images_train.json'
bdd_val_labels = '../bdd100k/labels/bdd100k_labels_images_val.json'

# Drivable maps
bdd_train_drivable = '../bdd100k/drivable_maps/color_labels/train/'
bdd_val_drivable = '../bdd100k/drivable_maps/color_labels/val/'

def get_drivability(mode, trip_id):
    # Create file and directory path
    directory_path = bdd_train_drivable if mode == 'train' else bdd_val_drivable
    drivable_path = directory_path + trip_id + '_drivable_color.png'

    try:

        # Initiate drivable object and extract red and blue colors
        drive = { 'direct': 0, 'optional': 0, 'empty': 0 }
        counter, total = extcolors.extract(drivable_path, 0, 10)

        # Store object values
        for key, value in counter:
            if str(key) == '(255, 0, 0)':
                drive['direct'] = float(value) / float(total) * 100
            elif str(key) == '(0, 0, 255)':
                drive['optional'] = float(value) / float(total) * 100
            else:
                drive['empty'] = float(value) / float(total) * 100

        return drive

    except Exception as e:
        print(e)

def extract_datetime(timestamp):
    return datetime.utcfromtimestamp(timestamp / 1000).strftime('%Y-%m-%d %H:%M:%S')

def get_point(point):
    datetime = extract_datetime(point['timestamp']).split(' ')
    return {
        'time': datetime[1],
        'speed': point['speed'],
        'loc': [point['longitude'], point['latitude']]
    }

def get_info(mode):
    # Create file and directory path
    directory_path = bdd_train_info if mode == 'train' else bdd_val_info

    try:
        trips = []
        progress_bar = Bar('Collecting all trips: ', suffix='%(percent)d%%', max=len(listdir(directory_path)))
        for f in listdir(directory_path):

            gps_file =  directory_path + f
            gps_point = {
                'tripid': f.split('.')[0],
                'startdate': '',
                'enddate': '',
                'starttime': '',
                'endtime': '',
                'track': []
            }

            with open(gps_file) as json_file:
                try:
                    data = json.load(json_file)
                    if 'locations' in data:
                        if len(data['locations']) != 0:
                            # Get date and set datetime
                            start_datetime = extract_datetime(data['locations'][0]['timestamp']).split(' ')
                            end_datetime = extract_datetime(data['locations'][len(data['locations']) - 1]['timestamp']).split(' ')
                            gps_point['startdate'] = start_datetime[0]
                            gps_point['enddate'] = end_datetime[0]
                            gps_point['starttime'] = start_datetime[1]
                            gps_point['endtime'] = end_datetime[1]
                            gps_point['videoname'] = data['filename']
                            for point in data['locations']:
                                p = get_point(point)
                                gps_point['track'].append(p)
                    # Store trip
                    trips.append(gps_point)
                    progress_bar.next()
                except Exception as e:
                    pass
        progress_bar.finish()
        return trips

    except Exception as e:
        print(e)

def get_labels(mode):
    file_path = bdd_train_labels if mode == 'train' else bdd_val_labels

    try:
        with open(file_path) as json_file:
            data = json.load(json_file)
            points = []
            for item in data:
                # Create point object
                point = {}
                # Get id, image, and other attributes
                point['imageid'] = item['name'].split('.')[0]
                point['image'] = item['name']
                point['time_of_day'] = item['attributes']['timeofday']
                point['weather'] = item['attributes']['weather']
                point['scene'] = item['attributes']['scene']
                # Count all object from each point
                objects = {}
                labels = item['labels']
                for label in labels:
                    if label['category'] in objects:
                        objects[label['category']] += 1
                    else:
                        objects[label['category']] = 1

                point['segments'] = objects
                points.append(point)

            return points

    except Exception as e:
        print(e)

def connect_db(mode, db_name):
    client = MongoClient('localhost', 27017)
    db = client[db_name]
    collection = db['train'] if mode == 'train' else db['val']
    return collection

if __name__ == '__main__':

    mode = 'train'
    # Connect to mongodb
    db_name = 'geovisuals_bdd3'
    collection = connect_db(mode, db_name)
    # Datasets are train and val datasets
    points = get_labels(mode)
    trips = get_info(mode)

    # Print total trips
    print('Done collecting ' + str(len(trips)) + ' trips')
    progress_bar = Bar('Adding image data: ', suffix='%(percent)d%%', max=len(trips))

    for trip in trips:

        image = next((x for x in points if x['imageid'] == trip['tripid']), None)

        trip['time_of_day'] = None
        trip['weather'] = None
        trip['scene'] = None

        if image is not None:
            trip['time_of_day'] = image['time_of_day']
            trip['weather'] = image['weather']
            trip['scene'] = image['scene']
            trip['images'] = []

            i = 0
            while i < len(trip['track']):

                image_data = {
                    'drivability': {},
                    'imagename': '',
                    'segments': {}
                }

                if i == 0:
                    image_data['drivability'] = get_drivability(mode, image['imageid'])
                    image_data['imagename'] = image['image']
                    image_data['segments'] = image['segments']
                    trip['images'].append(image_data)
                else:
                    trip['images'].append(image_data)

                i += 1

        # Insert trip to mongodb
        try:
            collection.insert_one(trip)
        except Exception as e:
            print(e)

        progress_bar.next()
    progress_bar.finish()

