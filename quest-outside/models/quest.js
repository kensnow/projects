const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const questSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    reqLevel:{
        type: Number,
        default: 1
    },
    objectives:[objectId],
    description:{
        type: String,
        required:true
    },
    difficulty:{
        type: String,
        enum:['Easy', 'Moderate', 'Difficult', 'Epic']
    },
    xpReward:{
        type:Number,
        required: true
    },
    subArea:[objectId],
    area:[objectId],
    state:[objectId]
})


module.exports = mongoose.model('Quest', questSchema)