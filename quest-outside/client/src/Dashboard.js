import React from 'react'
//import data from data providers
import Sidebar from './Sidebar'

import DashboardQuests from "./DashboardQuests"
import DashboardTrails from "./DashboardTrails"
import DashboardProfile from "./DashboardProfile"
function Dashboard() {
    return (
        <div>
            <DashboardProfile />
            <DashboardQuests />
            <DashboardTrails />
            Dashboard Trails
            Social Feed
            <Sidebar/>
        </div>
    )
}

export default Dashboard
