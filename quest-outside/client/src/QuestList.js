import React from 'react'
import QuestTag from './QuestTag'

function QuestList(props) {
    console.log(props)
    const questGroup = props.quests.filter((quest, i)=> {
        return (quest.reqLevel <= props.user.currentLevel)
    })

    const questArr = questGroup.map((quest, i) => {
        console.log(quest)
        return(<QuestTag key={i} tag={quest} />)
    })
    console.log(questArr)
    return (
        <div className="quest-list-container">
            {questArr}
        </div>
    )
}

export default QuestList
