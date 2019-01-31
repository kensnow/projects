import React from 'react'
//import data from data providers
import Sidebar from './Sidebar'

import DashboardQuests from "./DashboardQuests"
import DashboardTrails from "./DashboardTrails"
import DashboardProfile from "./DashboardProfile"
import DashboardObjectives from './DashboardObjectives';

function Dashboard() {
    return (
        <div>
            <DashboardProfile />
            <DashboardQuests />
            <DashboardObjectives />

            <Sidebar/>
        </div>
    )
}

export default Dashboard
