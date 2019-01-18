import React, {Component} from 'react'

import * as d3 from "d3"
import {Consumer} from "./DataProvider"




class Chart extends Component{
    //need helper functions to parse data & determine chart type
    constructor(){
        super();
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount(){
        this.createBarChart()
    }
    componentDidUpdate(){
        this.createBarChart()
    }

    createBarChart(){
        const node = this.node
        const dataMax = max()
    }

    render(){
        return (
            <Consumer>
                {value => (
                    
                <div className="chart-wrapper">
                    <h3></h3>
                    <p>{JSON.stringify(value.data)}</p>
                    <div className="chart">Chart</div>
                </div>
                )}
            </Consumer>
        )
    }
}

export default Chart
