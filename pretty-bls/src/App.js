import React from 'react'

import MainView from "./MainView"
import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Header />
            <SideBar />
            <MainView />
            <Footer />
        </div>
    )
}

export default App
