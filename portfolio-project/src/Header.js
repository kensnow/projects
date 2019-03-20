import React from 'react'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link className="nav-link" to="/">home</Link></li>
                <li><Link className="nav-link" to="projects">projects</Link></li>
                <li><Link className="nav-link" to="about">about</Link></li>
                <li><Link className="nav-link" to="contact">contact</Link></li> 
            </ul>
        </header>
    )
}

export default Header
