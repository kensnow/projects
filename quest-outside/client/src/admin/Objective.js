import React, { Component } from 'react'
import axios from 'axios';

export default class Objective extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            imgRef: "",
            trails: [],
            relatedQuests: [],
            elevation: 0,
            xpReward: 0,
            description: "",
            GPS: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post("/admin/objective", {
            ...this.state
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="admin-panel">
                <h3>Objective Creation Tool</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter Objective Name" />
                    <input onChange={this.handleChange} type="number" name="elevation" placeholder="Enter Max Elevation (ft)" />
                    <input onChange={this.handleChange} type="number" name="xpReward" placeholder="Enter XP Reward" />
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="gps" placeholder="enter GPS coordinates" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
