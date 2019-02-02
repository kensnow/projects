import React from 'react'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {Link} from "react-router-dom"

function Header(props) {
    const signedIn = props.token !== "" ? true : false
    return (
        <div>
            <Link to="/">Quest Outside</Link>
            {signedIn ? <Link className="logout-button" to="/" onClick={props.logOut}>Log Out</Link> : <Link className="signin-link" to="/signin">Sign In</Link>}
        </div>
    )
}

export default withProfileProvider(Header)
