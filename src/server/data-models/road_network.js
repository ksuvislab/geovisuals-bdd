import mongoose from 'mongoose';

// Create mongoose schema
var schema = new mongoose.Schema({
    name: String,
    features: mongoose.Schema.Types.Array,
}, { collection: 'road_network' });

export default mongoose.model('RoadNetwork', schema);