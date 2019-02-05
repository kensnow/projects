import React from 'react'
import TrailTag from './TrailTag'
import Sidebar from './Sidebar'

function QuestInfo(props) {
    console.log(props)
    const {name, description, difficulty, xpReward, reqLevel, trails, _id} = props.info

    //populate found quest if the quest is in the users active quests array
    const foundQuest = props.user.activeQuests.find( activeQuest => {
        return (activeQuest.quest === _id)
    })

    const trailArr = trails.map((trail, i ) => {
        const foundTrail = props.trails.find(trailElement => trailElement._id === trail)
        console.log(foundTrail)
        return (<TrailTag {...foundTrail} />)
    })
    console.log (_id)
    //foreach trail, map through.
    //linf trail dat in trail props object.
    //populate trail card, store in array, render array in browser
    return (
        <div>
            <h2>{name}</h2>
            <h5>{difficulty} XP:{xpReward}</h5>
            <h5>Required Level: {reqLevel}</h5>
            <p>{description}</p>
            <ul className="trail-list">
                {trailArr}
            </ul>

            {foundQuest ? <button onClick={() => props.completeQuest(props.user._id, _id, foundQuest._id)}>Complete Quest</button>  : <button onClick={() => props.acceptQuest(props.user._id, _id)}>Accept Quest</button> }
            <Sidebar />
        </div>
    )
}

export default QuestInfo
