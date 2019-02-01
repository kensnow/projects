import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import {withProfileProvider} from "./dataProviders/ProfileProvider"

const initialState = {
    email:"",
    username:"",
    password:"",
    state:"",
    area:""
}

class Signup extends Component {
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
        console.log(this.props)
        //send axios request to update
        this.props.signUp(this.state)
            .then(() => this.props.history.push('/api/dashboard'))

    }

    render() {
        const {username, password, state, area, email} = this.state
        const link = `user/${username}`
        return (
            <div>
                <h2>Sign up! Quest Outside</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="username" type="text" placeholder="Create Unique Username" value={username} />
                    <input onChange={this.handleChange} name="email" type="text" placeholder="Enter Email" value={email} />
                    <input onChange={this.handleChange} name="password" type="text" placeholder="Create password" value={password}/>

                    <select onChange={this.handleChange}>
                        <option>Select State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <select>
                        <option>Select Area...</option>
                        <option value="WasatchFront">Wasatch Front</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withProfileProvider(Signup)