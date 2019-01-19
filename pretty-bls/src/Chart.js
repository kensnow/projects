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
            width: document.getElementById('chart').clientWidth,
            height: document.getElementById('chart').clientHeight
        })
    }
    createBarChart(){
        const node = this.node
        const data = this.props.data.values
        const dataMax = d3.max(this.props.data.values)
        const dataMin = d3.min(this.props.data.values)

        // const x_axis = d3.axisBottom()
        //     .scale(yScale)
        //     .append("rect")

        const yScale = d3.scaleLinear()
            .domain([dataMin, dataMax])
            .range([dataMin, dataMax])



        d3.select(node)
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")

        // d3.select(node)
        //     .selectAll("rect")
        //     .data(data)
        //     .exit()
        //     .remove()

        d3.select(node)
            .selectAll("rect")
            .data(data)
            .style("fill",'#fe9922')
            .attr("x", (d,i) => i * 25) //not sure about 25 here
            .attr("y", d => this.state.height - yScale(d))
            .attr("height", d => yScale(d))
            .attr("width", 20) //will need to consider making more dynamic

            
    }

    render(){
        return (
                   
                <div className="chart-wrapper">
                    <h3>{this.props.title}</h3>
                    <h5>{this.props.subtitle}</h5>
                    <div className="chart" id="chart">
                        <svg ref={node => this.node = node} width={this.state.width} height={this.state.height}></svg>
                    </div>
                </div>

        )
    }
}

export default withChartContext(Chart)
