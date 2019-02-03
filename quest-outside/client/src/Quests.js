import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import QuestTag from "./QuestTag"
import {withDataProvider} from "./admin/DataProvider"

function Quests(props) {
    const questGroup = props.quests.map((quest, i)=> {
        //if user has not accepted a quest
        console.log(props)
        if (props.user.activeQuests.find(activeQuest => {
            return activeQuest === quest._id
        }) === undefined){
            //and if user is at the correct level
            if (quest.reqLevel <= props.user.currentLevel){
                //only pass relevant trail objects down to Quest tag
                const trailRefs = quest.trails.map((obj, i ) => props.trails.find( trail => {
                    return (trail._id === obj)
                   
                }))
                // console.log("trailrefs:" + JSON.stringify(trailRefs))
                return(<QuestTag key={i} tag={quest} trails={trailRefs}/>)
            }
        }
    })

    console.log(props)
    return (
        <div className="quest-tag-container">
             {questGroup}
        </div>
    )
}

export default withDataProvider(withProfileProvider(Quests))
