const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    message: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model('Contact', contactSchema)