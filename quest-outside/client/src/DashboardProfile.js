import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import QuestLink from "./QuestLink"

function DashboardProfile(props) {
    console.log(props)
    const {username,currentLevel, xp, activeQuests, completedQuests} = props.user
    

    const questLinks = activeQuests.map(( userQuest, i) => {
        const foundQuest = props.quests.find(q => {
            return (q._id === userQuest.quest)
        })
        const questDisplay = {
            ...userQuest,
            tag:foundQuest
        }
        console.log(questDisplay)
        return <QuestLink key={i} {...questDisplay}/>
    })

    console.log(questLinks)
    return (
        // const questMap = 
        <div>
            <h4>{username}, level {currentLevel}</h4>
            <ul>
                <li>XP: {xp}</li>
                <li>Active Quests: {questLinks}</li>
                <li>Completed Quests: {completedQuests}</li>
            </ul>
        
            Suggested Quests: 
        </div>
    )
}

// export default withDataProvider(withProfileProvider(DashboardProfile))
export default DashboardProfile