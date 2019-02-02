import React from 'react'
import {Route} from "react-router-dom"
import Details from "./Details"
import Landing from './Landing'
import Signup from "./Signup"
import Signin from "./Signin"
import Dashboard from "./Dashboard"
import Quests from "./Quests"
import Trails from "./Trails"
import ProtectedRoute from "./dataProviders/ProtectedRoute"
import Admin from "./admin/Admin"

function Mainview() {
    return (
        <div className="main">
            <Route exact path="/" component={Landing} />
            <Route path="/details" component={Details} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/dashboard/quests" component={Quests} />
            <ProtectedRoute path="/admin" component={Admin} />
            {/* <Route path="/dashboard/trails" component={Trails} /> */}
        </div>
    )
}

export default Mainview
