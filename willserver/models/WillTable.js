const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WillMainSchema = new Schema({
    Karen: {
        type: String,
        required: false
    },
    Myles: {
        type: String,
        required: false
    },
    Matth: {
        type: String,
        required: false
    },
    Eddie: {
        type: String,
        required: false
    },
    Granite: {
        type: String,
        required: false
    },

    Belmore: {
        type: String,
        required: false
    },

    Commentary:
        {
            type: String,
            required: false
        },

    BelmoreSellOut:{
        type: Boolean,
        required: false
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = WillMain = mongoose.model('WillMain', WillMainSchema);
