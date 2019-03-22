import React from 'react'
import {Link} from 'react-router-dom'

function ProjectCard({ title, subTitle, description, technology, thumbnail, github, type }) {

    const technologyGroup = technology.join(', ')

    return (
        <>
        {type === 'card' ?
        <div className="project-preview-card-container">
                {title === '@kensnow' ? 
                <a href={github}>
                    <div className="project-card-image-container">
                        <img className="project-card-image project-card-link" src={thumbnail} />
                        <h3 className="project-card-title">{title}</h3>
                    </div>
                </a>
                :
                <Link to='/projects'>
                    <div className="project-card-image-container">
                        <img className="project-card-image project-card-link" src={thumbnail} />
                        <h3 className="project-card-title">{title}</h3>
                    </div>
                </Link>
                }

        </div>
                :
                <>
                {title !== '@kensnow' ?
                <div className="project-card-full">
                    <div className="project-card-description">
                        <h2>{title}</h2>
                        <h4>{subTitle}</h4>
                        <a href={github}>{title} on github</a>
                        <p className="project-description-full">{description}</p>
                        <h5>Tech: {technologyGroup}</h5>
                        <p>You can see the code for {title} on <a href={github}>github</a></p>
                    </div>
                    <img className="project-card-image" src={thumbnail} />
                </div>
                :
                null
                
                }
                </>

        } 
        </>
        
    )
}

export default ProjectCard
