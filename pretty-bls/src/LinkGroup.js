import React from 'react'
import {Link} from "react-router-dom"
import BlsLink from "./BlsLink"
import sidebarData from "./data/sidebarData"


function LinkGroup() {
    const linkGroup = sidebarData.map((button) => <BlsLink {...button}> </BlsLink>)
  
    return (
        <div>
            <ul>
                {linkGroup}
            </ul>
        </div>
    )
}

export default LinkGroup
