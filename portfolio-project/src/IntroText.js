import React from 'react'

function IntroText() {
    return (
        <section className="intro-box">
            <div className="profile-box">
                <div className="profile-picture"></div>
                <div className="profile-header">
                    <h1 className="name-title">Ken Snow</h1>
                    <h3>Web Developer</h3>
                </div>

            </div>
            <div className="description-box">
                <p>Welcome!  My name is Ken Snow.  I enjoy creating awesome web apps that are beautiful, functional, and useful.</p>
                <p>I am trained in the MERN Stack, but love learning new things.  I also enjoy exploring the limits of my potential with technology, outdoor adventure, and homemade pizza.</p><p>My base camp is at 4,226ft. in Salt Lake City, USA.  Please look around, and thank you for visiting.</p>
            </div>

        </section>
    )
}

export default IntroText
