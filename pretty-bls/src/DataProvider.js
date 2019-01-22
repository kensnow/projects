import React, { Component, createContext } from 'react'
import axios from "axios"

// import data from "./data/LNS14000000.json" //unemployment rate
// import data from "./data/CUUR0000SA0.json"  //Consumer Price Index
// import data from "./data/CES0000000001.json" //total nonfarm payroll
// import data from "./data/CUSR0000SA0.json" //CPI % change index
// import data from "./data/LNS11300000.json" //Labor Force Participation rate
// import data from "./data/CES3000000001.json" //manufacturing employment
// import data from "./data/CES0500000003.json"  //svg hrly earnings
// import data from "./data/PCUOMFG--OMFG--.json"  //Producer Price index
// import data from "./data/CIU2010000000000A.json" //total compensation % change
import data from "./data/PRS84006092.json"

import sidebarData from "./data/sidebarData"

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

        // return axios.get("https://swapi.co/api/people/")
        //     .then( response => 
        //         this.setState({
        //             series: seriesID,
        //             data: data.Results.series[0].data,
        //             loading: false,
        //             errMsg: false
        //         }))
        //     .catch( errMsg => 
        //         this.setState({
        //            loading:false,
        //            errMsg:"Cannot get data"     
        //     }))

        return(
            this.setState({
                series: seriesID,
                data: data.Results.series[0].data,
                loading: false,
                errMsg: false
            })
        )

    }
        
    
    



    handleClick(button){
        
        ///make get data call with series ID, send state down to chart
        this.getData(button.series_id)
        // this.getData("fakedata")
    }

    render() {
        // console.log(this.state.data)
        
        const chartContext = {
            ///need to refactor to simply this.state
            data: this.state.data,
            getDataInfo: this.handleClick,
            title: this.state.title,
            subtitle: this.state.subtitle,
            description: this.state.description,
            loading: this.state.loading,
            errMsg: this.state.errMsg
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
        this.resetState();
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
                    data: response.data.Results.series[0].data,
                    loading: false,
                    errMsg: false,
                    title: sidebarData.find(chart => ( chart.series_id === seriesID)).title,
                    subtitle: sidebarData.find(chart => ( chart.series_id === seriesID)).subtitle,
                    description: sidebarData.find(chart => ( chart.series_id === seriesID)).description,

                }))
            .catch( errMsg => 
                this.setState({
                   loading:false,
                   errMsg:"Cannot get data"     
            }))
*/





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



*/