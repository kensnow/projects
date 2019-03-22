import React from 'react'

function AboutMe() {
    return (
        <div className="about-me-container">
            <img clasName="about-me-img" src={require("./styles/assets/ken-snow-profile-sm.jpg")} />
            <div className="about-me-description">
                <h1>Ken Snow</h1>
                <h3>Web Developer</h3>
                <p>I am a full stack web developer in the MERN stack.  I enjoy new challenges and languages, and have a background with data visualization, script writing, and parsing.  I am currently seeking employment as a web develper.</p>
                <p>I am loacated in the City of Salt, UT, and I am open to both local and remote opportunities.</p>
                <p>This page was created using React. Source code can be found <a href="http://github.com/kensnow/projects/tree/master/portfolio-project">here</a></p>

            </div>

        </div>
    )
}

export default AboutMe
