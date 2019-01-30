import React from 'react'
import {Route} from "react-router-dom"
import Details from "./Details"
import Landing from './Landing'
import Signup from "./Signup"
import Signin from "./Signin"
import Dashboard from "./Dashboard"
import Quests from "./Quests"
import Trails from "./Trails"

function Mainview() {
    return (
        <div className="main">
            <Route exact path="/" component={Landing} />
            <Route path="/details" component={Details} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Dashboard} />
            <Route path="/profile/quests" component={Quests} />
            <Route path="/profile/trails" component={Trails} />
        </div>
    )
}

export default Mainview
