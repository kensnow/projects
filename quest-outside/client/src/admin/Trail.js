import React, { Component } from 'react'
import axios from 'axios';


export default class Trail extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            imgRef:"",
            relatedObjectives:[],
            relatedQuests:[],
            distance:0,
            elevationGain:0,
            description:"",
            trailHeadGPS:"",
            trailEndGPS:""
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
        console.log(this.state)
        axios.post("/admin/trail", {
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
                <h3>Trail Creation Tool</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Enter trail name here" />
                    <input onChange={this.handleChange} type="number" name="distance" placeholder="Enter Distance here" />
                    <input onChange={this.handleChange} type="number" name="elevationGain" placeholder="enter elevation gain here"/>
                    <textarea onChange={this.handleChange} name="description" cols="40" rows="5" placeholder="Enter description"></textarea>
                    <input onChange={this.handleChange} type="text" name="trailHeadGPS" placeholder="Enter trail head GPS here"/>
                    <input onChange={this.handleChange} type="text" name="trailEndGPS" placeholder="Enter Trail end GPS here"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
