import React from 'react'
import Quests from "./Quests"
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import {withDataProvider} from "./admin/DataProvider"
import Loading from "./Loading"
import ErrorMsg from "./Error"

function QuestContainer(props) {
    console.log(props)

    return (
        <div className="quest-container">
            <Loading loading={props.loading}>
                <ErrorMsg errMsg={props.errorMsg}>
                   <Quests {...props}/>
              </ErrorMsg>
         </Loading>     
        </div>
    )
}

export default withDataProvider(withProfileProvider(QuestContainer))
