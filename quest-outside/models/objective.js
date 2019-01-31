const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const objectiveSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgRef:{
        data: Buffer,
    },
    trails:[{type:objectId, ref:'Trail'}],
    relatedQuests:[{type:objectId, ref:'Quest'}],
    elevation:Number,
    xpReward:{
        type:Number,
        required: true
    },
    description: String,
    GPS: String


})

module.exports = mongoose.model('Objective', objectiveSchema)