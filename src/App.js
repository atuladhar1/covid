import React from 'react';
import './App.css';
import Map from "./MapCompoment/Map"
import Table from "./Table"

class App extends React.Component{

  constructor(){
    super()
    this.state={initialized: false, countryData:{}, display:"recovered" }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(a){
    this.setState({display: a})
  }
// API call from source and save it in the state as an array for easies data sorting.
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data=> {
      const Countries = data.Countries
      var counter=0;
      let final = Countries.map((country) =>
      {
          return{
            count: counter++,
            country : country.Country, 
            confirmed : country.TotalConfirmed, 
            deaths: country.TotalDeaths,
            recovered: country.TotalRecovered,
            cCode: country.CountryCode,
          }
          })
      this.setState({initialized: true, countryData: final})
    })
  }

// Every function is called here.
  render(){
    if (this.state.initialized)
    {
      return (
        <div id = "Container">
          <div id= "button-container">
            <label className="button" onClick={this.handleClick.bind(this,"recovered")}>Recoveries</label>
            <label className="button" onClick={this.handleClick.bind(this,"deaths")}>Deaths</label>
            <label className="button" onClick={this.handleClick.bind(this,"confirmed")}>Confirmed</label>
          </div>
          <div id = "content-Container">
            
            <Map data = {this.state.countryData} display ={this.state.display}/>
            <Table data = {this.state.countryData}/>
            
          </div>
        </div>
      )
    }
    else {
      return <h1>Loading. . .</h1>
    }
    }
}
export default App;
// <Table data = {this.state.countryData}/>