import React, {useState} from 'react'

function IntroText() {
    const [toggle, setToggle] = useState(false)
    return (
        <section className="intro-box">
            <div className="name-box">
                <h1 className="name-title">Ken Snow</h1>
                <h3>Web Developer</h3>
            

            </div>
            <div className="description-box">
                <p>Welcome!  My name is Ken Snow.  I enjoy creating awesome web apps that are beautiful, functional, and useful.</p>
                <div className="switch-container">
                    <p className="switch-text">{toggle ? 'OK!': 'more?'}</p>
                    <label className="switch">
                        <input type="checkbox" onClick={()=> setToggle(!toggle)}/>
                        <span className="slider round"></span>
                    </label>


                </div>

                {toggle ? <><p>I am trained in the MERN Stack, but love learning new things.  I also enjoy exploring the limits of my potential with technology, outdoor adventure, and homemade pizza.</p><p>I have a professional background in data visualization using perl for scripting and a proprietary renderer built off of C.</p><p >My base camp is at 4,226ft. in Salt Lake City, USA.  Please look around, and thank you for visiting.</p></> : null}

            </div>

        </section>
    )
}

export default IntroText
