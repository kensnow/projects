import React from 'react'
import Header from './Header'
import MainView from './MainView'
import styles from "./styles/styles.css"
import ReactGA from 'react-ga'


function App() {

    const initializeReactGa = () => {
        ReactGA.initialize('UA-136971787-1')
        ReactGA.pageview('/')
    }

    initializeReactGa()

    return (

        <div>
            <Header/>
            <MainView />

        </div>
    )
}

export default App
