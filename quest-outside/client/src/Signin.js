import React, { Component, createContext } from 'react'
import {Link} from "react-router-dom"
import {withProfileProvider} from "./dataProviders/ProfileProvider"

const initialState = {
    username:"",
    password:"",
}

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = initialState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target: {name, value}}){
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.signIn(this.state.username)
        //send axios request to update
        alert('Successful login!');
        this.props.history.push('/profile')
        this.setState(initialState)
    }
    render() {
        const {username, password} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="username" type="text" placeholder="Enter Username" value={username} />
                <input onChange={this.handleChange} name="password" type="text" placeholder="Enter Password" value={password}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default withProfileProvider(Signin)