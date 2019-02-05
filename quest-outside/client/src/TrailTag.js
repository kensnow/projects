import React from 'react'

function TrailTag(props) {
    const {name, summary, location, length, ascent, difficulty, imgSmall} = props
    return (
        <div className="trail-tag">
            {imgSmall ? <img className="thumbnail tag-pic trail-tag-pic"src={imgSmall} alt={name}/> : null}
            <h3>{name}</h3>
            <h5>{location}, {length}mi </h5>
            <p>{summary === "Placeholder" ? null : summary}</p>

        </div>
    )
}

export default TrailTag
