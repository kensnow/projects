import React, { Component } from 'react'

export default class Objective extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            imgRef:"",
            trails:[],
            relatedQuests:[],
            elevation:0,
            xpReward:0,
            description:"",
            GPS:""
        }
    }
    render() {
        return (
            <div>
                <h3>Objective Creation Tool</h3>
                <form>
                    
                </form>
            </div>
        )
    }
}
