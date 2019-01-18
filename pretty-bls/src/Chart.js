import React, {Component} from 'react'

import * as d3 from "d3"

import {withChartContext} from "./DataProvider"

class Chart extends Component{
    //need helper functions to parse data & determine chart type
    constructor(props){
        super(props);
        this.state = {width: 0, height:0}
        this.createBarChart = this.createBarChart.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount(){
        this.createBarChart()
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions)
    }
    componentDidUpdate(){
        this.createBarChart()
    }

    updateWindowDimensions(){
        this.setState({
            width: window.innerWidth < 400 ? 300 : (Math.round(window.innerWidth * .8)),
            height: window.innerHeight < 600 ? 300 : (Math.round(window.innerHeight * .6))
        })
    }
    createBarChart(){
        const node = this.node
        const dataMax = d3.max(this.props.data.values)
        const yScale = d3.scaleLinear()
            .domain([0, dataMax])
            .range([0, this.state.height])

        d3.select(node)
            .selectAll("rect")
            .data(this.props.data.values)
            .enter()
            .append("rect")

        d3.select(node)
            .selectAll("rect")
            .data(this.props.data.values)
            .exit()
            .remove()

        d3.select(node)
            .selectAll("rect")
            .data(this.props.data.values)
            .style("fill",'#fe9922')
            .attr("x", (d,i) => i * 25) //not sure about 25 here
            .attr("y", d => this.state.height - yScale(d))
            .attr("height", d => yScale(d))
            .attr("width", 25) //will need to consider making more dynamic

    }

    render(){
        return (

                    
                <div className="chart-wrapper">
                    <h3></h3>
                    <div className="chart">
                        <svg ref={node => this.node = node} width={this.state.width} height={this.state.height}></svg>
                    </div>
                </div>

        )
    }
}

export default withChartContext(Chart)
