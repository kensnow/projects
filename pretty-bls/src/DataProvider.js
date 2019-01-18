import React, { Component, createContext } from 'react'
import axios from "axios"

import data from "./data/blsDataSample.json"
import {parseData, drawChart} from "./helperFunctions"
export const {Consumer, Provider} = createContext()

//set initial state
const initialState = {
    seriesID:"",
    data:[],
    loading: true,
    errMsg: null,
    // blsApi: "https://api.bls.gov/publicAPI/v2/timeseries/data/"
}

// const url = "https://api.bls.gov/publicAPI/v2/timeseries/data/"
// const url = "https://swapi.co/api/people/"
// const seriesID = "LNS14000000" //placeholder until I get buttons working


export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = initialState

        //bind prototype functions
        this.resetState = this.resetState.bind(this)
        this.getData = this.getData.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //need to revert state upon each button click
    resetState(){
        this.setState(initialState)
    }

    getData(seriesID){
        // this.resetState();
        //placeholder for now until working, will switch out for seriesID once running
        // let id = this.seriesID
        // "https://api.bls.gov/publicAPI/v2/timeseries/data/"+seriesID

        return axios.get("https://swapi.co/api/people/")
            .then( response => 
                this.setState({
                    series: seriesID,
                    data: data.Results.series[0].data,
                    loading: false,
                    errMsg: false
                }))
            .catch( errMsg => 
                this.setState({
                   loading:false,
                   errMsg:"Cannot get data"     
            }))

        

    }

    handleClick(button){
        
        ///make get data call with series ID, send state down to chart
        // this.getData(button.series_id)
        this.getData("fakedata")
    }

    render() {
        // console.log(this.state.data)
       const cleanData = parseData(this.state.data, this.state.seriesID)

        const chartContext = {
            data: cleanData,
            getDataInfo: this.handleClick
        }

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


/// not fully working BLS code

/*
getData(seriesID){
    // this.resetState();
    //placeholder for now until working, will switch out for seriesID once running
    // let id = this.seriesID
    // "https://api.bls.gov/publicAPI/v2/timeseries/data/"+seriesID
    return axios({
        method:"post",
        url:"https://api.bls.gov/publicAPI/v2/timeseries/data/",
        data:{
            seriesid:[seriesID],
            catalog:false, 
            calculations:false, 
            annualaverage:false,
            registrationkey:"061d1f39d5ae46cdacdd66d4a26d23ea"
        }

    })
        .then( response => 
            this.setState({
                series: seriesID,
                data: response.data.Results.series[0].data.value,
                loading: false,
                errMsg: false
            }))
        .catch( errMsg => 
            this.setState({
               loading:false,
               errMsg:"Cannot get data"     
        }))

    

}

*/