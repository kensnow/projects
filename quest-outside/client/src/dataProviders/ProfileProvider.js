import React, { Component, createContext } from 'react'

export const {Consumer, Provider} = createContext()

// const initialState = {
//     username: "",
//     level:"",
//     xp:"",
//     activeTrails:[],
//     activeQuests:[],
//     completedTrails:[],
//     completedQuests:[]
// }

//fake data
const initialState = {
    username: "Forrest",
    level:"2",
    xp:"35",
    activeTrails:["pipeline"],
    activeQuests:["MillCreek Conquerer"],
    completedTrails:["Rattlesnake Gulch"],
    completedQuests:["SLC Punk"]
}

export default class ProfileProvider extends Component {
    constructor(){
        super();
        this.state = initialState
        this.signIn = this.signIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.signUp = this.signUp.bind(this)
    }
    // state containing user data
    // methods for logging in, signing up, populating state from db, logging out, updating state & db upon completed quest
    signIn(state){
        //axios request to login
        console.log(state)
        return true
    }

    signUp(state){
        //axios request to add username
        return true
    }

    logOut(){
        this.setState(initialState)
        this.props.history.push('/')
    }

    render() {
        
        return (
            this.props.children({
                signIn: this.signIn,
                signUp: this.signUp,
                logOut: this.logOut,
                ...this.state

            })
        )
    }
}

export const withProfileProvider = C => props => (
    <ProfileProvider>
        {containerProps => <C {...containerProps} {...props}/>}
    </ProfileProvider>
)
