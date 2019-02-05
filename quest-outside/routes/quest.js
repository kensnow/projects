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
        const action = req.body.action
        const subDocId = req.body.subDocId

        if(action === "accept"){
            Profile.findByIdAndUpdate(user,  {$push: {activeQuests:[{quest}]}}, {new:true})
            .then(updatedProfile => res.status(200).send(updatedProfile))
            .catch(err => {
                res.status(500)
                next(err)
            })
        }
     
        if(action === "complete"){
            console.log("in complete")
            Profile.findByIdAndUpdate(user,  {$push: {completedQuests:[{quest}]}}, {new:true})
            .then(user => {
                return Quest.findById(quest)
                    .then(foundQuest => {
                        const xp = foundQuest.xpReward
                        user.xp = user.xp + xp
                        //level up handler
                        while (user.xp >= user.nextLevel){
                            user.nextLevel = Math.round(user.nextLevel + (user.nextLevel * 1.25))
                            user.currentLevel++
                        }
                        return user.save()
                        
                    })
       
                
            })
            .then(user => {
                user.activeQuests.id(subDocId).remove()
                console.log(user)
                //save the user
                return user.save()
            })
            .then(user => {
                // send back user
                res.status(200).send(user)
            })
            // catch error
            .catch(err => {
                res.status(500)
                next(err)
            })
        }
        

    })

    module.exports = questRouter