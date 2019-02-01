import React, { Component, createContext } from 'react'
import axios from 'axios'
export const {Consumer, Provider} = createContext()

// const initialState = {
//     email: "",
//     level:"",
//     xp:"",
//     activeTrails:[],
//     activeQuests:[],
//     completedTrails:[],
//     completedQuests:[]
// }

//fake data


export default class ProfileProvider extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password:"",
            token:"",
            user:{}
        }
        this.signIn = this.signIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.signUp = this.signUp.bind(this)
     
    }
    // state  user data
    // methods for logging in, signing up, populating state from db, logging out, updating state & db upon completed quest
    signIn = (userDat) => {
        //axios request to login
        console.log(userDat)
        return axios.post("/auth/signin",{
            ...userDat
        })
            .then(res => {     
                console.log(res.data)
                const {user, token} = res.data
                this.setState({
                    token,
                    password: "",
                    user
                })
                console.log(this.state)
                return res  
                  
            })
            .catch(err => {
                console.log("err is " + err)
                //perhaps redirect to bad login page here?
                this.props.history.push('/signin')
                return (err)
            })
    }

    signUp(userDat){
        return axios.post("/auth/signup",{
            ...userDat
        })
            .then(res => {
                const {user, token} = res.data
                this.setState({
                    token,
                    password: "",
                    user
                })   
                return res
            })
            .catch(err => {
                this.props.history.push('/signup')
                return err
            })
      
    }

    logOut(){
     
        this.props.history.push('/')
    }

    render() {
        const value = {
            signIn: this.signIn,
            signUp: this.signUp,
            logOut: this.logOut,
            ...this.state 
        }

        return (
            <Provider value = {value} >
               {this.props.children}
            </Provider>
        )
    }
}

export const withProfileProvider = C => props => (
    <Consumer>
        {containerProps => <C {...containerProps} {...props}/>}
    </Consumer>
)
