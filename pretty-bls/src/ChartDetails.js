import React from 'react'
import {Consumer} from "./DataProvider"


function ChartDetails({props}) {
    
    // let call = props.data.location.state.button

    return (
        <div className="details">
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default ChartDetails
