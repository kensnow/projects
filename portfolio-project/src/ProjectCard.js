import React from 'react'
import {Link} from 'react-router-dom'

function ProjectCard({ title, subTitle, description, technology, thumbnail, github, type }) {

    const technologyGroup = technology.join(', ')

    return (
        <div className="project-preview-card-container">
            {type === 'card' ?
                <div className="project-card">
                    <div className="project-card-image card-image thumbnail" style={{ backgroundImage: thumbnail }}></div>
                    <div className="project-card-detail">
                        <h2><Link to='/projects'>{title}</Link></h2>
                        <h5>Source Code on: <a href={github} target="_blank">Github</a></h5>
                        <h5>Tech: {technologyGroup}</h5>
                    </div>

                </div>
                :
                <div className="project-card-full">
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                    <a href={github}>{title} on github</a>
                    <div className="project-image-full card-image-full project-info" style={{ backgroundImage: thumbnail }}></div>

                    <p className="project-description-full">{description}</p>
                    <h5>Tech: {technologyGroup}</h5>
                    <p>You can see the code for {title} on <a href={github}>github</a></p>
                </div>
            }
        </div>
    )
}

export default ProjectCard
