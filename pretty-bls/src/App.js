import React from 'react'

import MainView from "./MainView"
import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"
import "./assets/styles.css"
function App() {
    return (
        <div>
            <Header />
            <MainView />
            <SideBar />
            <Footer />
        </div>
    )
}

export default App
