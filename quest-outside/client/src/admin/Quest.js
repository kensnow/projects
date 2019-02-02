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
        axios.post("/admin/objective")//todo axios req
    }

    render() {
        return (
            <div className="admin-panel">
                <h3>Quest Creation Tool</h3>
                <form>
                    <input type="text" name="name" placeholder="Enter quest name here" />
                    <input type="number" name="reqLevel" placeholder="Required Level" />
                    <input className="description-box" type="text" name="description" placeholder="Quest description here" />
                    <input type="text" name="difficulty" placeholder="Enter difficulty here" />
                    <input type="number" name="xpReward" placeholder="Enter XP reward here" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
