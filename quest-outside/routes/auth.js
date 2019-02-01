const express = require('express')
const Profile = require('../models/profile')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    Profile.findOne({email: req.body.email}, (err,existingUser) => {
        if (err){
            res.status(500)
            return next(err)
        }
        if (existingUser !== null){
            res.status(400)
            return next(new Error("Email already exists"))
        }

        const newUser = new Profile(req.body)
        newUser.save((err,user) => {
            if (err){
                res.status(500)
                return next(err)
            }
            //if user signs up, provide token immediately so they dont have to re login
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success:true, user:user.toObject(), token})
        })

    })

})

authRouter.post('/signin',(req, res,next) => {
    Profile.findOne({email:req.body.email.toLowerCase()}, (err, user) => {
        if (err){
            return next(err)
        }
        if(!user || user.password !== req.body.password){
            res.status(403)
            return next(new Error("email or password incorrect"))
        }
        const token = jwt.sign(user.toObject(),process.env.SECRET)
        return res.send({token: token, user: user.toObject(), success:true})
    })
})

module.exports = authRouter