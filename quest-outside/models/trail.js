const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId


const trailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgLink:{
        type:String
    },
    relatedObjectives:[{type:objectId, ref:'Objectives'}],
    relatedQuests:[{type:objectId, ref:'Quests'}],
    distance:Number,
    difficulty:{
        type: String,
        enum:['green', 'greenBlue', 'blue', 'blueBlack', "black", 'dblack']
    },
    elevationGain:Number,
    description: String,
    trailHeadGPS:String,
    trailEndGPS:String,
    subarea:String,
    area:String,
    state:String,
    xpReward:Number

})

module.exports = mongoose.model('Trail', trailSchema)