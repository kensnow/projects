import React, { Component } from 'react'
import axios from 'axios';


export default class Quest extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            reqLevel: 0,
            objectives: [],
            description: "",
            difficulty: "",
            xpReward: "",

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
        axios.post("/admin/quest", {
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
                <h3>Quest Creation Tool</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter quest name here" />
                    <input onChange={this.handleChange} type="number" name="reqLevel" placeholder="Required Level" />
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="difficulty" placeholder="Enter difficulty here" />
                    <input onChange={this.handleChange} type="number" name="xpReward" placeholder="Enter XP reward here" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
