import mongoose from 'mongoose';


var schema = new mongoose.Schema({

    trip_id: String,
    tracepoints_coords: mongoose.Schema.Types.Array,
    matchings: mongoose.Schema.Types.Mixed

}, { collection: 'street' });

//schema.index({ locations: '2dsphere'});

export default mongoose.model('Street', schema);