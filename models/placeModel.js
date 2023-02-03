const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    placeName: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Place', placeSchema);