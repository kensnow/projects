import React from 'react'
import axios from 'axios'
import {withDataProvider} from "./admin/DataProvider"
import {withProfileProvider} from "./dataProviders/ProfileProvider"

function QuestTag(props) {
    const {name, trails, description, difficulty, xpReward, reqLevel} = props.tag
    const [trailRefs] = props.trails
    console.log("user:" + props.user._id)
    console.log("quest:" + props.tag._id) //why the fuck doesnt this work???
    
    return (
        <div className="questTag">
            <h3>{name}</h3>
            <h5>Difficulty: {difficulty}</h5>
            <h5>Required Level: {reqLevel}</h5>
            <h5>XP: {xpReward}</h5>
            <p>{description}</p>
            <ul>
            {/* {trailNames} */}
            </ul>
            <button onClick={() => props.acceptQuest(props.user._id, props.tag._id)}>Accept Quest</button>
            
        </div>
    )
}

export default withProfileProvider(withDataProvider(QuestTag))
