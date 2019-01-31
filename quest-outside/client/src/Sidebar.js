import React from 'react'
import Quests from './Quests'
import Trails from './Trails'
import {Link, Route} from "react-router-dom"

function Sidebar() {
    return (
        <div className="Sidebar">
           <Link to="/dashboard/quests">Quests</Link>
           <Link to="/dashboard/trails">Trails</Link>
        </div>
    )
}

export default Sidebar
