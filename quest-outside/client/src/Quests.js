import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withQuestProvider} from "./dataProviders/QuestProvider"
import QuestTag from "./QuestTag"

function Quests(props) {
    const questGroup = props.quests.map((quest, i)=> <QuestTag key={i} {...quest}/>)

    return (
        <div>
            {questGroup}
        </div>
    )
}

export default withQuestProvider(withProfileProvider(Quests))
