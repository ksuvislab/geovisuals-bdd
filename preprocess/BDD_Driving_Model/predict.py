import os
import json
import wrapper
import tensorflow as tf
from tensorflow.core.example import example_pb2
from StringIO import StringIO
from PIL import Image
from matplotlib.pyplot import imshow, show
import numpy as np

tfrecords_path = "./data/tfrecord_release2/"
output_path = "./data/prediction_output/"
frames_path = "./data/frames/"

# Pretrained models
#tcnn1 = wrapper.Wrapper("discrete_tcnn1", "./data/pretrained_models/discrete_tcnn1/model.ckpt-126001.bestmodel", 20)

cnn_lstm = wrapper.Wrapper("discrete_cnn_lstm", "./data/pretrained_models/discrete_cnn_lstm/model.ckpt-146001.bestmodel", 20)

#fcn_lstm = wrapper.Wrapper("discrete_fcn_lstm", "./data/pretrained_models/discrete_fcn_lstm/model.ckpt-315001.bestmodel", 20)



if __name__ == '__main__':

    example = example_pb2.Example()

    for item in os.listdir(tfrecords_path):

        tfrecords_id = item.split(".")[0]
        json_path = os.path.join( output_path, str(tfrecords_id) + '.json')

        if item.endswith(".tfrecords"): #and not os.path.isfile(json_path):
            this_tfrecords  = os.path.join(tfrecords_path, item)
            count = 0
            for example_serialized in tf.python_io.tf_record_iterator(this_tfrecords):
                example.ParseFromString(example_serialized)
                feature_map = example.features.feature
                encoded = feature_map['image/encoded'].bytes_list.value
                count += 1

            image_path = os.path.join('./data/frames/', tfrecords_id)

            if not os.path.exists(image_path):
                os.makedirs(image_path)

            #tcnn1_output = []
            cnn_lstm_output = []
            #fcn_lstm_output = []

            for i in range(len(encoded)):
                if i % 5 == 0:
                    file_jpgdata = StringIO(encoded[i])

                    # save image
                    dt = Image.open(file_jpgdata)
                    im = Image.fromarray(np.asarray(dt))
                    #im.save(os.path.join(image_path, str(i/5) + '.png'))

                    # observe prediction output
                    arr = np.asarray(dt)
                    #out1 = tcnn1.observe_a_frame(arr)
                    out2 = cnn_lstm.observe_a_frame(arr)
                    #out3 = fcn_lstm.observe_a_frame(arr)

                    # Add prediction output to list
                    #tcnn1_output.append(out1[0].tolist()[0])
                    cnn_lstm_output.append(out2[0].tolist()[0])
                    #fcn_lstm_output.append(out3[0].tolist()[0])

                    print(str(i/5))

            write_path = os.path.join(output_path, str(tfrecords_id) + '.json')
            if os.path.exists(write_path):
                print('Write existing file ...')
                with open(write_path, 'r') as json_file:
                    write_data = json.load(json_file)
                write_data['cnn_lstm'] = cnn_lstm_output
                #write_data['fcn_lstm'] = fcn_lstm_output
                with open(write_path, 'w') as json_file:
                    json.dump(write_data, json_file)
            else:
                # write prediction output in json
                with open(os.path.join( output_path, str(tfrecords_id) + '.json'), 'w') as json_file:
                    y = {
                        "id": tfrecords_id,
                        "tcnn1": tcnn1_output
                    }
                    json.dump(y, json_file)