import React from 'react'

function QuestTag({questName, objectives, description, difficulty, expVal, subAreas, areas, states}) {
    const objectiveGroup = objectives.map((obj, i )=> <li key={i}>{obj}</li>)
    return (
        <div className="questTag">
            <h3>{questName}</h3>
            <h5>Difficulty: {difficulty}</h5>
            <h5>XP: {expVal}</h5>
            <p>{description}</p>
            <ul>
                {objectiveGroup}
            </ul>
            <p>{subAreas}, {areas}, {states}</p>
        </div>
    )
}

export default QuestTag
