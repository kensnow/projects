import React from 'react'
import {Link} from "react-router-dom"
import {withProfileProvider} from './dataProviders/ProfileProvider'


function Landing(props) {

    console.log(props)


    return (
        <div className="landing-page landing">
            <Link className="landing-link landing" to="/details">More Info</Link>
            <Link className="landing-link landing" to="/signup">Sign Up</Link>
            {props.token ? <Link to="/dashboard">Dashboard</Link>: 
            <Link className="landing-link landing" to="/signin">Log In</Link>}
        </div>
    )
}

export default withProfileProvider(Landing)
