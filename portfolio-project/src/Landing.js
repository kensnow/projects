import React from 'react'
import IntroText from './IntroText'
import Projects from './Projects'
import ContactMe from './ContactMe'


function componentName() {
    return (
        <main className="app-container">
            <section className="intro-section">
                <IntroText />   
            </section>
            <section className="project-section">      
                <Projects type={'card'}/>
            </section>

            <ContactMe />
        </main>
    )
}

export default componentName
