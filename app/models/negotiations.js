const mongoose = require('mongoose')

const NegotiationScheme = new mongoose.Schema({
    idGestion: {
        type: Number
    },
    fileName: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('negotiations', NegotiationScheme)