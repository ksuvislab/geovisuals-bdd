import wrapper
import tensorflow as tf
from tensorflow.core.example import example_pb2
from StringIO import StringIO
from PIL import Image
from matplotlib.pyplot import imshow, show
import numpy as np

a = wrapper.Wrapper('discrete_tcnn1','./data/pretrained_models/discrete_tcnn1/model.ckpt-126001.bestmodel', 20)
example = example_pb2.Example()
in_file = './data/tfrecord_release/tfrecords/b1c9c847-3bda4659.tfrecords'

count = 0
for example_serialized in tf.python_io.tf_record_iterator(in_file):
    example.ParseFromString(example_serialized)
    feature_map = example.features.feature
    encoded = feature_map['image/encoded'].bytes_list.value
    print(count)
    count += 1

file_jpgdata = StringIO(encoded[0])
dt = Image.open(file_jpgdata)
imshow(np.asarray(dt))

print(a.observe_a_frame(np.asarray(dt)))

