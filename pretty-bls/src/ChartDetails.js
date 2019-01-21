import React from 'react'
import {Consumer} from "./DataProvider"


function ChartDetails({props}) {
    let call = props.location.state.button
    return (
        <div className="details">
            <h3>{call.title}</h3>
            <h5>{call.subtitle}</h5>
            <p>{call.description}</p>
        </div>
    )
}

export default ChartDetails
