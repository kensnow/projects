import React from 'react'
import {Link} from "react-router-dom"

function Landing() {
    return (
        <div className="landing-page landing">
            <Link className="landing-link landing" to="/details">More Info</Link>
            <Link className="landing-link landing" to="/signup">Sign Up</Link>
            <Link className="landing-link landing" to="/signin">Log In</Link>
        </div>
    )
}

export default Landing
