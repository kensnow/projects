import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"

function DashboardProfile(props) {
    console.log(props)
    return (
        <div>
            <h4>{props.username}, level {props.level}</h4>
            <ul>
                <li>XP: {props.xp}</li>
                <li>Active Quests: {props.activeQuests}</li>
                <li>Completed Quests: {props.completedQuests}</li>
            </ul>
        
            Suggested Quests: 
        </div>
    )
}

export default withProfileProvider(DashboardProfile)
