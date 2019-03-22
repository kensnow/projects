import React from 'react'
import projectInfo from './info'
import ProjectCard from './ProjectCard'

function ProjectPreview(type) {

    const projectCardCollection = projectInfo.map((project, i) => <ProjectCard key={i}{...project} {...type} />
    )

    return (
        <>
            {projectCardCollection}
        </>
    )
}

export default ProjectPreview
