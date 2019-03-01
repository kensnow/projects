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
                <div className="project-section-container">
                    <h2>Projects:</h2>
                    <ProjectPreview type={'card'}/>
                </div>

            </section>

            <ContactMe />
        </main>
    )
}

export default componentName
