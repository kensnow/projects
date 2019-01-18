import React from 'react'
import {Switch, Route} from "react-router-dom"
import sidebarData from "./data/sidebarData"
import Home from "./Home"
import About from "./About"
import {Consumer} from "./DataProvider"
import Chart from "./Chart"


function MainView() {
    return (
            <div className="main">

            
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/study/:series_id" component={Chart} />
            </div>
    )
}

export default MainView
