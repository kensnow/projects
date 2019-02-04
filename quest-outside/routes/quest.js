const express = require('express')
const questRouter = express.Router()
const Quest = require('../models/quest')
const Profile = require('../models/profile')

questRouter.route('/')
    .get((req, res, next) => {
        console.log(req)
        Quest.find()
            .then(questCollection => res.status(200).send(questCollection))
            .catch(err => {
                res.status(500)
                next(err)
            })

    })
    .put((req,res,next) => {
        const user = req.body.user
        const quest = req.body.quest
        // Profile.findById(user)
        Profile.findByIdAndUpdate(user,  {$push: {activeQuests:[{quest}]}}, {new:true})
            .then(updatedProfile => res.status(200).send(updatedProfile))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })

    module.exports = questRouter