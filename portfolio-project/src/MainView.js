import React from 'react'
import {Route} from 'react-router-dom'
import Landing from './Landing'
import Projects from './Projects'
import Contact from './Contact'
import AboutMe from './AboutMe'

function MainView() {
    return (
        <div className="main-view">
            <Route exact path="/" component={Landing}/>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={AboutMe} />
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default MainView
