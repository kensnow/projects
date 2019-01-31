const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const profileSchema = new mongoose.Schema({
    email:{
        type:String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required:true
    },
    username:{
        type: String,
        required: true,
        trim: true,
    },
    psw: {
        type: String,
        required: true,
        minlength:6
    },
    profileImg:{
        type: Buffer,
        contentType:String
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
        quest: {type: objectId, ref:'Quest'},
        acceptedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedQuests:[{
        quest: {type: objectId, ref:'Quest'},
        completedOn: {
            type: Date,
            default: Date.now
        }
    }],
    completedObjectives:[{
        objective: {type: objectId, ref:'Objective'},
        completedOn: {
            type: Date,
            default: Date.now
        }
    }]

})

module.exports = mongoose.model('Profile', profileSchema)