import React from 'react'
//import data from data providers
import Sidebar from './Sidebar'
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import DashboardQuests from "./DashboardQuests"
import DashboardTrails from "./DashboardTrails"
import DashboardProfile from "./DashboardProfile"
import DashboardObjectives from './DashboardObjectives';
import Loading from "./Loading"
import ErrorMsg from "./Error"


function Dashboard(props) {
    console.log(props)
    return (
        <div>
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                    <DashboardProfile {...props}/>
                    <DashboardQuests {...props}/>
                </ErrorMsg>
            </Loading>
            <Sidebar/>
        </div>
    )
}

// export default withQuestProvider(Dashboard)

export default withProfileProvider(withDataProvider(Dashboard))