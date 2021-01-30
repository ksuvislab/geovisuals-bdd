import mongoose from 'mongoose';

var schema = new mongoose.Schema({

    trip_id: String,
    start_timestamp: Number,
    end_timestamp: Number,
    video_file: String,
    locations: mongoose.Schema.Types.Mixed,
    speeds: mongoose.Schema.Types.Array,
    timestamps: mongoose.Schema.Types.Array,
    time_of_day: String,
    weather: String,
    scene: String,
    image: String,
    segments: mongoose.Schema.Types.Mixed,
    frame_index: Number

}, { collection: 'train' });

schema.index({ locations: '2dsphere'});

export default mongoose.model('Train', schema);