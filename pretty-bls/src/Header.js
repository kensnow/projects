import React from 'react'
import {Link} from "react-router-dom"


function Header() {
    return (
        <nav>
            <h1>Pretty BLS</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Header
