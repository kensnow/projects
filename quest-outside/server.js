const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

//dashboard endpoint when user logs in
app.use('/api/dashboard', require('./routes/dashboard'))

app.use((err, req, res) => {
    res.send({errMsg:err.message})
})

mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT), () => {
    console.log('listening on port ' + process.env.PORT)
}