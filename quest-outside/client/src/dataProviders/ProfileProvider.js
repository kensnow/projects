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
    // state containing user data
    // methods for logging in, signing up, populating state from db, logging out, updating state & db upon completed quest
    signIn(userDat){
        //axios request to login
        console.log(userDat)
        return axios.post("/auth/signin",{
            ...userDat
        })
            .then(res => {     
                console.log(res.data)
                // const {user, token} = res.data
                this.setState({
                    token: res.data.token,
                    password: "",
                    user:res.data.user
                })
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
        axios.post("/auth/signup",{
            ...userDat
        })
            .then(res => {
                const {email, token} = res.data
                this.setState({
                    email,
                    token,
                    password:""
                })   
                return res
            })
            .catch(err => {
                return err
            })
      
    }

    logOut(){
     
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
