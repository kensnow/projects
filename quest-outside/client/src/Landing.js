import React from 'react'
import {Link} from "react-router-dom"

function Landing() {
    return (
        <div className="landingPage landing">
            <Link className="landingLink landing" to="/details">More Info</Link>
            <Link className="landingLink landing" to="/signup">Sign Up</Link>
            <Link className="landingLink landing" to="/signin">Log In</Link>
        </div>
    )
}

export default Landing
