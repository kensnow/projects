import React from 'react'
import Quests from './Quests'
import Trails from './Trails'
import {Link, Route} from "react-router-dom"

function Sidebar() {
    return (
        <div className="Sidebar">
           <Link to="/profile/quests">Quests</Link>
           <Link to="/profile/trails">Trails</Link>
        </div>
    )
}

export default Sidebar
