const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')
const app = express()

app.use(express.json())

//dashboard endpoint when user logs in

app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/profile', require('./routes/profile'))

app.use('/auth', require('./routes/auth'))

app.use((err, req, res) => {
    console.error(err)
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return (res.send({errMsg:err.message}))
})


mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT, () => (
    console.log('listening on port ' + process.env.PORT)
))