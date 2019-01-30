import React, { Component } from 'react'
import {Link} from "react-router-dom"

const initialState = {
    username:"",
    password:"",
}

export default class Signin extends Component {
    constructor(){
        super();
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
        
        //send axios request to update
        this.setState = initialState
    }
    render() {
        const {username, password} = this.state
        const link = `user/${username}`
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="username" type="text" placeholder="Enter Username" value={username} />
                <input onChange={this.handleChange} name="password" type="text" placeholder="Enter Password" value={password}/>
                <Link to={link}><button>Submit</button></Link>
            </form>
        )
    }
}
