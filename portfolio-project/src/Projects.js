import React from 'react'
import projectInfo from './info'
import ProjectCard from './ProjectCard'

function Projects(type) {

    const projectCardCollection = projectInfo.map((project, i) => <ProjectCard key={i}{...project} {...type} />)

    return (
        <>
            {projectCardCollection}
        </>
    )
    
}

export default Projects
