import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"

function DashboardProfile(props) {
    console.log(props.user)
    const {username,level, xp, activeQuests, completedQuests} = props.user
    return (
        <div>
            <h4>{username}, level {level}</h4>
            <ul>
                <li>XP: {xp}</li>
                <li>Active Quests: {activeQuests}</li>
                <li>Completed Quests: {completedQuests}</li>
            </ul>
        
            Suggested Quests: 
        </div>
    )
}

export default withProfileProvider(DashboardProfile)
