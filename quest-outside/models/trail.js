const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const trailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgRef:{
        data: Buffer,
    },
    relatedObjectives:[{type:objectId, ref:'Objectives'}],
    relatedQuests:[{type:objectId, ref:'Quests'}],
    distance:Number,
    elevationGain:Number,
    description: String,
    trailHeadGPS:String,
    trailEndGPS:String


})

module.exports = mongoose.model('Trail', trailSchema)