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
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/quests" component={Quests} />
            <Route path="/dashboard/trails" component={Trails} />
        </div>
    )
}

export default Mainview
