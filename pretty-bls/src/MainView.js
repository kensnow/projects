import React from 'react'

import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"
import Chart from "./Chart"


function MainView() {
    return (
        <div>
            <Header />
            <SideBar />
            <Chart />
            <Footer />

        </div>
    )
}

export default MainView
