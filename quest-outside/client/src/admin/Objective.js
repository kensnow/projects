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
        axios.post("/admin/objective")//todo axios req
    }
    render() {
        return (
            <div className="admin-panel">
                <h3>Objective Creation Tool</h3>
                <form>
                    <input type="text" name="name" placeholder="Enter Objective Name" />
                    <input type="number" name="elevation" placeholder="Enter Max Elevation (ft)" />
                    <input type="number" name="xpReward" placeholder="Enter XP Reward" />
                    <input className="description-box" type="text" name="description" placeholder="Description" />
                    <input type="text" name="gps" placeholder="enter GPS coordinates" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
