const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const profileSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    psw: {
        type: String,
        required: true
    },
    currentLevel: {
        type: Number,
        default:1
    },
    xp:{
        type: Number,
        default:0
    },
    activeQuests:[{
        quest: objectId,
        acceptedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedQuests:[{
        quest: objectId,
        completedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedObjectives:[{
        objective: objectId,
        completedOn: {
            type: Date,
            default: Date.now
        }
    }]

})

module.exports = mongoose.model('Profile', profileSchema)