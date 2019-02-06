import React from 'react'
import {Link, Route} from "react-router-dom"
import {withProfileProvider} from "./dataProviders/ProfileProvider"

function TrailTag(props) {
    console.log(props)

    
    const {name, summary, location, length, ascent, difficulty, imgSqSmall,_id} = props.trail
    return (
        <div className="trail-tag">
            {imgSqSmall ? <img className="thumbnail tag-pic trail-tag-pic"src={imgSqSmall} alt={name}/> : null}
            <Link to={{pathname:"/dashboard/trail-info/"+_id}}><h3>{name}</h3></Link>
            <h5>{location}, {length}mi </h5>
            <p>{summary === "Placeholder" ? null : summary}</p>
            {props.acceptedQuest ? props.acceptedQuest.isCompleted ? <h3>Complete</h3> : <button onClick={() => props.completeTrail(props.user._id,props.quest,props.acceptedQuest,_id)}>Complete</button> : ""}

        </div>
    )
}

export default withProfileProvider(TrailTag)
