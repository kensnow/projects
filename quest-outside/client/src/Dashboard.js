import React from 'react'
//import data from data providers
import Sidebar from './Sidebar'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withQuestProvider} from "./dataProviders/QuestProvider"
import DashboardQuests from "./DashboardQuests"
import DashboardTrails from "./DashboardTrails"
import DashboardProfile from "./DashboardProfile"
import DashboardObjectives from './DashboardObjectives';

function Dashboard(props) {
    console.log(props)
    return (
        <div>
            <DashboardProfile />
            <DashboardQuests />
            <DashboardObjectives />

            <Sidebar/>
        </div>
    )
}

export default withQuestProvider(Dashboard)

// export default withProfileProvider(withQuestProvider(Dashboard))