import React, { Component } from 'react'

import * as d3 from "d3"

import { withChartContext } from "./DataProvider"

class Chart extends Component {
    //need helper functions to parse data & determine chart type
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, data: props }
        this.createBarChart = this.createBarChart.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.createBarChart()
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions)
    }
    componentDidUpdate() {
        this.createBarChart()
    }

    updateWindowDimensions() {
        this.setState({
            width: document.getElementById('chart').clientWidth, //get width from container
            height: document.getElementById('chart').clientHeight
        })
    }
    createBarChart() {

        const node = this.node

        const dataObj = this.props.data

        const valuesMap = dataObj.map(d => d.value) //get an array of data called valuesMap
        const freqMap = dataObj.map(d => d.periodName)

        const dataMax = d3.max(dataObj, (d) => { return d.value })
        const dataMin = d3.min(dataObj, (d) => { return d.value })

        //parameters
        const margin = {top: 20, right: 20, bottom: 20, left: 20}
        const height = this.state.height - margin.top - margin.bottom
        const width = this.state.width - margin.left- margin.right
        
        const barWidth = 30
        const barOffset = 5

        //set up scales to chart fills correctly, use linear for percent charts (0-100) and
        // percent change charts
        const yScale = d3.scaleLinear()
            .domain([0, dataMax])
            .range([0, height])

        const yAxisValues = d3.scaleLinear()
            .domain([0, dataMax])
            .range([height, 0]) //need to reverse to correct scale drawing

        const yAxisTicks = d3.axisLeft(yAxisValues)
            .ticks(Math.round(dataMax/dataMin))

        const xScale = d3.scaleBand()
            .domain(valuesMap)
            .padding(.1)
            .range([0, width])

        const xAxisValues = d3.scaleTime()
            .domain([freqMap[0],freqMap[freqMap.length-1]])
            .range([0, width])

        const xAxisTicks = d3.axisBottom(xAxisValues)
            .ticks(d3.timeYear.every(1))
        
        //dynamically change bar colors based on size
        const colors = d3.scaleLinear()
            .domain([0, dataMax])
            .range(['#FFB832', '#C61C6F'])

        //*****
        // const x_axis = d3.axisBottom()
        //     .scale(yScale)
        //     .append("rect")

        d3.selectAll(`svg > *`).remove() //clear previous chart

        const myChart = d3.select(node)


            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)

            .append('g')
            .attr('transform', `translate(${margin.left},${margin.right})`)
            .selectAll('rect')
            .data(valuesMap)
            .enter().append('rect')
            .attr("fill", (d) => colors(d))
            .attr("width", (d) => xScale.bandwidth())
            .attr('height', 0)
            //.attr("height", (d) => yScale(d))
            .attr("x", (d) => xScale(d)) //spread bars out using width and offset
            .attr('y', height)
        //.attr("y", d => height - yScale(d)) //position bars at bottom

        const yGuide = d3.select(node).append('g')
            .attr('transform', 'translate(15,0)')
            .call(yAxisTicks)

        const xGuide = d3.select(node).append('g')
            .attr('transform', `translate(15,${height})`)
            .call(xAxisTicks)

        myChart.transition()
            .attr("height", (d) => yScale(d))
            .attr("y", d => height - yScale(d))
            .delay((d, i) => i * 10)
            .duration(1000)
            .ease(d3.easeBackInOut)
    }

    render() {
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
