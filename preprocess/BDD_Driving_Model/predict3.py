import os
import json
import wrapper
import tensorflow as tf
from tensorflow.core.example import example_pb2
from StringIO import StringIO
from PIL import Image
from matplotlib.pyplot import imshow, show
import numpy as np

tripid_path = "../../data/NY_TRIP_ID.txt"
tfrecords_path = "/Volumes/parndepu/tfrecord_release/"
output_path = "../../data/prediction_output/"
frames_path = "../../data/frames/"

model_type = 'fcn_lstm' # tcnn1, cnn_lstm, fcn_lstm

def get_wrapper(model):
    if model == 'tcnn1':
        return wrapper.Wrapper("discrete_tcnn1", "./data/pretrained_models/discrete_tcnn1/model.ckpt-126001.bestmodel", 20)
    elif model == 'cnn_lstm':
        return wrapper.Wrapper("discrete_cnn_lstm", "./data/pretrained_models/discrete_cnn_lstm/model.ckpt-146001.bestmodel", truncate_len=1, is_lstm=True)
    elif model == 'fcn_lstm':
        return wrapper.Wrapper("discrete_fcn_lstm", "./data/pretrained_models/discrete_fcn_lstm/model.ckpt-315001.bestmodel", truncate_len=1, is_lstm=True)

def save_image(im, save_image_path):
    if not os.path.exists(save_image_path):
        im.save(save_image_path)
    return

def save_prediction_output(tfrecords_id, prediction_output, write_path):
    if os.path.exists(write_path):
        print('Write existing file ...')
        with open(write_path, 'r') as json_file:
            write_data = json.load(json_file)
            write_data[model_type] = prediction_output
        with open(write_path, 'w') as json_file:
            json.dump(write_data, json_file)
    else:
        with open(write_path, 'w') as json_file:
            output = { "id": tfrecords_id }
            output[model_type]= prediction_output
            json.dump(output, json_file)

def check_exist_output(write_path):
    if os.path.exists(write_path):
        with open(write_path, 'r') as json_file:
            json_data = json.load(json_file)
            if model_type in json_data:
                return True
            else:
                return False
    return False

def get_trip_ids(txt_path):
    with open(txt_path, "r") as txt_file:
        for line in txt_file:
            tripids = line.split(" ")
            return tripids

def match_tripids(tfrecord_id, tripids):
    for id in tripids:
        if tfrecord_id == id:
            return True
    return False

if __name__ == '__main__':

    tripids = get_trip_ids(tripid_path)
    print('Get total: ' + str(len(tripids)) + ' trips')

    example = example_pb2.Example()
    model_wrapper = get_wrapper(model_type)

    for item in os.listdir(tfrecords_path):

        tfrecords_id = item.split(".")[0]
        json_path = os.path.join( output_path, str(tfrecords_id) + '.json')
        write_path = os.path.join(output_path, str(tfrecords_id) + '.json')

        print('Process Trip ID: ' + str(tfrecords_id))
        if item.endswith(".tfrecords") and not check_exist_output(write_path) and match_tripids(tfrecords_id, tripids):
            this_tfrecords  = os.path.join(tfrecords_path, item)
            count = 0
            for example_serialized in tf.python_io.tf_record_iterator(this_tfrecords):
                example.ParseFromString(example_serialized)
                feature_map = example.features.feature
                encoded = feature_map['image/encoded'].bytes_list.value
                count += 1

            image_path = os.path.join(frames_path, tfrecords_id)

            if not os.path.exists(image_path):
                os.makedirs(image_path)

            prediction_output = []
            for i in range(len(encoded)):
                if i % 5 == 0:
                    file_jpgdata = StringIO(encoded[i])
                    # save image
                    dt = Image.open(file_jpgdata)
                    im = Image.fromarray(np.asarray(dt))
                    save_image(im, os.path.join(image_path, str(i/5) + '.png'))
                    #im.save(os.path.join(image_path, str(i/5) + '.png'))
                    # observe prediction output
                    arr = np.asarray(dt)
                    out = model_wrapper.observe_a_frame(arr)
                    # Add prediction output to list
                    prediction_output.append(out[0].tolist()[0])
                    #print(str(i/5))

            save_prediction_output(tfrecords_id, prediction_output, write_path)
        else:
            print(str(model_type) + ' already generate predicted output.')