const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const objectiveSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})