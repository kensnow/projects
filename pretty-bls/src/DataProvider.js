import React, { Component, createContext } from 'react'
import axios from "axios"

import data from "./data/blsDataSample.json"

export const {Consumer, Provider} = createContext()

//set initial state
const initialState = {
    seriesID:"",
    data:[],
    loading: true,
    errMsg: null
}

// const url = "https://api.bls.gov/publicAPI/v2/timeseries/data/"
const url = "https://swapi.co/api/people/"
const seriesID = "LNS14000000" //placeholder until I get buttons working


export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = initialState

        //bind prototype functions
        this.resetState = this.resetState.bind(this)
        this.getData = this.getData.bind(this)
    }

    //need to revert state upon each button click
    resetState(){
        this.setState(initialState)
    }

    getData(seriesID){
        this.resetState();
        //placeholder for now until working, will switch out for seriesID once running
        let id = this.seriesID
        return axios.get(url)
            .then( response => 
                this.setState({
                    data: response.data.Results.series[0].data,
                    loading: false,
                    errMsg: false
                }))
            .catch( errMsg => 
                this.setState({
                   loading:false,
                   errMsg:"Cannot get data"     
            }))
    }

    handleClick(e){
        this.getData()
    }

    render() {
        const chartContext = {
            data: data,
            getData: this.handleClick
        }
        console.log(JSON.stringify(this.state.data))
        return (
            <Provider value={chartContext}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withChartContext = C => Cprops => (
    <Consumer>
        {value => <C {...value}{...Cprops} />}
    </Consumer>
)