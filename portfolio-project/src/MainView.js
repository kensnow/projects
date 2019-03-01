import React from 'react'
import {Route} from 'react-router-dom'
import Landing from './Landing'
import Projects from './Projects'
import Contact from './Contact'

function MainView() {
    return (
        <div>
            <Route exact path="/" component={Landing}/>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

export default MainView
