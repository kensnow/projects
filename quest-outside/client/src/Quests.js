import React from 'react'
import QuestTag from "./QuestTag"


function Quests(props) {
    console.log(props)

    const questArr = props.user.activeQuests.map((activeQ, i) => {
            const foundQuest = props.quests.find(questElement =>  (questElement._id === activeQ.quest))
            return <QuestTag tag={foundQuest} />
    })
    console.log(questArr)






    return (
        <div className="quest-tag-container">
                    {questArr.length === 0 ? <p>No active quests, go find some!</p> : questArr}
        </div>
    )
}

export default Quests
