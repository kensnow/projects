import React from 'react'
import QuestTag from "./QuestTag"


function DashboardQuests(props) {
    const questGroup = props.quests.filter((quest, i)=> {
        return (quest.reqLevel <= props.user.currentLevel)
    })
    const filteredQuests =[]
    questGroup.map((availQuest, i) => {
        const foundQuest = props.user.activeQuests.find(activeQuests => {
            return (activeQuests.quest === availQuest._id)
        })
        if(!foundQuest){
            filteredQuests.push(<QuestTag key={i} tag={availQuest} user={props.user}/>)
        }
       
        console.log(foundQuest)
    })
    console.log(filteredQuests)
    return (
        <div className="dashboard-quest-container">
             {filteredQuests.length === 0  ? <p>There are currently no available quests, complete active quests to gain XP and gain access to more!</p> : filteredQuests}
        </div>
    )
}

export default DashboardQuests
