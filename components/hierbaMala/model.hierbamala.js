const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cellphone:{
        type: Number,
        required: true
    },
    product:{
        type: String,
        required: true
    },
    flavor:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

const model = mongoose.model('Hierbamala',mySchema)
module.exports = model