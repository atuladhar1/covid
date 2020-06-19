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

// Every function is called here. Map-container created as a container for the map to be displayed. Everything else is just calls.
  render(){
    if (this.state.initialized)
    {
      return (
        <div>
        <div id= "button-container">
        <button className="button" onClick={this.handleClick.bind(this,"recovered")}>Recoveries</button>
        <button className="button" onClick={this.handleClick.bind(this,"deaths")}>Deaths</button>
        <button className="button" onClick={this.handleClick.bind(this,"confirmed")}>Confirmed</button>
        </div>
          <Table data = {this.state.countryData}/>
          <Map data = {this.state.countryData} display ={this.state.display}/>
        </div>
      )
    }
    else {
      return <h1>wut</h1>
    }
    }
}
//  <Map data = {this.state.countryData}/>
// <Table data = {this.state.countryData}/>

export default App;
