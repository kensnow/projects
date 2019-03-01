import React from 'react'

function ProjectCard({ title, subTitle, description, technology, thumbnail, github, type }) {

    const technologyGroup = technology.join(', ')

    return (
        <div className="project-preview-card-container">
            {type === 'card' ?
                <div className="project-card">
                    <div className="project-card-image card-image thumbnail" style={{ backgroundImage: thumbnail }}></div>
                    <div className="project-card-detail">
                        <h2>{title}</h2>
                        <h5>Tech: {technologyGroup}</h5>
                    </div>

                </div>
                :
                <div className="project-card-full">
                    <div className="project-image-full card-image-full project-info" style={{ backgroundImage: thumbnail }}></div>
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                    <p>{description}</p>
                    <h5>Tech: {technologyGroup}</h5>
                    <p>You can see the code for {title} on <a href={github}>github</a></p>
                </div>
            }
        </div>
    )
}

export default ProjectCard
