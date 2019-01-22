 import React, { Component } from 'react'

import * as d3 from "d3"

import { withChartContext } from "./DataProvider"
import ChartDetails from "./ChartDetails"


class Chart extends Component {
    //need helper functions to parse data & determine chart type
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, data:props }
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
        d3.selectAll(`svg > *`).remove() //clear previous chart
        
        const node = this.node

        const dataObj = this.props.data //enable when using api

        const valuesMap = dataObj.map((d, i )=> (+d.value)+(i/10000)) //get an array of data called valuesMap... i/10000 is a workaround to the unique values issue
       
        const freqMap = dataObj.map(d => 
            {
                var months = new Array(12);
                    months[0] = "January";
                    months[1] = "February";
                    months[2] = "March";
                    months[3] = "April";
                    months[4] = "May";
                    months[5] = "June";
                    months[6] = "July";
                    months[7] = "August";
                    months[8] = "September";
                    months[9] = "October";
                    months[10] = "November";
                    months[11] = "December";
                return new Date(d.year, months.indexOf(d.periodName))
            })
        
        valuesMap.reverse() //fix data series from BLS so chart reads left to right
        freqMap.reverse() //fix data series from BLS
        // const dataMax = d3.max(dataObj, (d) => { return d.value })
        // const dataMin = d3.min(dataObj, (d) => { return d.value })
        const dataMax = d3.max(valuesMap)
        const dataMin = d3.min(valuesMap)
        //parameters
        const margin = {top: 20, right: 20, bottom: 20, left: 40}
        const height = this.state.height - margin.top - margin.bottom
        const width = this.state.width - margin.left - margin.right
        
        const barWidth = 30
        const barOffset = 5
        const indices = d3.range(0,freqMap.length)
        
        //set up scales to chart fills correctly, use linear for percent charts (0-100) and
        // percent change charts
        const yScale = d3.scaleLinear()
            .domain([dataMin, dataMax])
            .range([dataMin, height])

        const yAxisValues = d3.scaleLinear()
            .domain([dataMin, dataMax])
            .range([height,0]) //need to reverse to correct scale drawing

        const yAxisTicks = d3.axisLeft(yAxisValues)
            .ticks(20)

        const xScaleBand = d3.scaleBand()
            .domain(valuesMap)
            .padding(.1)
            .range([0, width])
        
        // const xScale = d3.scaleOrdinal()
        //     .domain(valuesMap)
        //     .range([0,freqMap.length])

        const xAxisValues = d3.scaleTime()
            // .domain([freqMap[0],freqMap[freqMap.length-1]])
            .domain([freqMap[0], freqMap[freqMap.length-1]])
            .range([0, width])

        const xAxisTicks = d3.axisBottom(xAxisValues)
            .ticks(width <= 400 ? 4 : 12) //dynamically change #ticks based on size
    
        //dynamically change bar colors based on size
        const colors = d3.scaleLinear()
            .domain([dataMin, dataMax])
            .range(['#341C1C', '#ADFCF9'])

        //*****
        // const x_axis = d3.axisBottom()
        //     .scale(yScale)
        //     .append("rect")

        

        const myChart = d3.select(node)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            
            .append('g')
            
          .selectAll('rect')
            .data(valuesMap)
          .enter().append('rect')
          
           

            .attr('transform', `translate(${margin.left},${margin.right})`)
       
            .attr("fill", (d) => colors(d))
            .attr("width", (d) => xScaleBand.bandwidth()) // calculate width of each bar
            // .attr('height', 0)
            .attr("height", (d) => yScale(d))
            .attr("x", (d,i) => xScaleBand(d)) //spread bars out using width and offset
            // .attr('x', ((d,i) => xScale(i)))
            .attr('y', height)
            .attr('class', 'bar')
            //.attr("y", d => height - yScale(d)) //position bars at bottom  

        const yGuide = d3.select(node).append('g')
            .attr('transform', 'translate(40,20)')
            .call(yAxisTicks)
            

        const xGuide = d3.select(node).append('g')
            .attr('transform', `translate(40,${height + 20})`)
            .call(xAxisTicks)
            

        myChart.transition()
            .attr("height", (d) => yScale(d))
            .attr("y", d => height - yScale(d))
            .delay((d, i) => i * 10)
            .duration(1000)
            .ease(d3.easeBackInOut)
           
    }

    render() {

        const infoObj = this.props.location.state.button

        return (
                <div className="chart-wrapper">
                    <h3>{infoObj.title}</h3>
                    <h5>{infoObj.subtitle}</h5>
                    <div className="chart" id="chart">
                        <h6 className="yAxis-title">{infoObj.yScaleName}</h6>
                        <svg ref={node => this.node = node} width={this.state.width} height={this.state.height}></svg>
                    </div>
                <ChartDetails props={this.state.data}/>
            </div>

        )
    }
}

export default withChartContext(Chart)
