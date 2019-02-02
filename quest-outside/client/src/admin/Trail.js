import React, { Component } from 'react'
import axios from 'axios';


export default class Trail extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            imgRef:"",
            relatedObjectives:"",
            relatedQuests:"",
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
        axios.post("/admin/objective")//todo axios req
    }

    render() {
        return (
            <div className="admin-panel">
                <h3>Trail Creation Tool</h3>
                <form>
                    <input type="text" name="name" placeholder="Enter trail name here" />
                    <input type="number" name="distance" placeholder="Enter Distance here" />
                    <input type="number" name="elevationGain" placeholder="enter elevation gain here"/>
                    <input type="text" name="description" placeholder="Enter decription here" />
                    <input type="text" name="trailHeadGPS" placeholder="Enter trail head GPS here"/>
                    <input type="text" name="trailEndGPS" placeholder="Enter Trail end GPS here"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
