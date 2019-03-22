import React from 'react'
import {Link} from 'react-router-dom'

function ProjectCard({ title, subTitle, description, technology, thumbnail, github, type }) {

    const technologyGroup = technology.join(', ')

    return (
        <div className="project-preview-card-container">
            {type === 'card' ?
                <Link to='/projects'>
                <div className="project-card-image-container">
                    <img className="project-card-image" src={thumbnail} />
                    {/* <div className="project-card-image card-image thumbnail" style={{ backgroundImage: thumbnail }}></div> */}
                    <h3 className="project-card-title">{title}</h3>
                </div>
                </Link>

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
