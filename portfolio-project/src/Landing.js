import React from 'react'
import IntroText from './IntroText'
import ProjectPreview from './ProjectPreview'
import ContactMe from './ContactMe'


function componentName() {
    return (
        <main className="app-container">
            <section className="intro-section">
                <IntroText />   
            </section>
            <section className="project-section">      
                <ProjectPreview type={'card'}/>
            </section>

            <ContactMe />
        </main>
    )
}

export default componentName
