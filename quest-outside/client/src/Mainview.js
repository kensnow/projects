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
            <Route exact path="/api/dashboard" component={Dashboard} />
            <Route path="/api/dashboard/quests" component={Quests} />
            <Route path="/api/dashboard/trails" component={Trails} />
        </div>
    )
}

export default Mainview
