import React from 'react'

import BlsLink from "./BlsLink"
import sidebarData from "./data/sidebarData"


function LinkGroup() {
    const linkGroup = sidebarData.map((button, i) => <BlsLink key={i} {...button}></BlsLink>)
  
    return (
        <div>
            <ul>
                {linkGroup}
            </ul>
        </div>
    )
}

export default LinkGroup
