import React, { Component, createContext } from 'react'
import {Link} from "react-router-dom"
import {withProfileProvider} from "./dataProviders/ProfileProvider"
import axios from 'axios';



class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            token:"",
            ...props
        }
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
        console.log(this.props)
        this.props.signIn(this.state)
            .then(() => this.props.history.push('/api/dashboard'))
            .catch((err) => this.props.history.push('/signin'))
        //send axios request to update

    }
    render() {
        const {email, password} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="email" type="text" placeholder="Enter email" value={email} />
                <input onChange={this.handleChange} name="password" type="text" placeholder="Enter Password" value={password}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default withProfileProvider(Signin)