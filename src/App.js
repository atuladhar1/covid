import React from 'react';
import './App.css';
import Map from "./MapCompoment/Map"
import Table from "./Table"

class App extends React.Component{

  constructor(){
    super()
    this.state={initialized: false, countryData:{}, recov: false, dead : false,  infect:false}
  }

// API call from source and save it in the state as an array for easies data sorting.
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data=> {
      const Countries = data.Countries
      let final = Countries.map((country) =>
      {
          return{
            country : country.Country, 
            confirmed : country.TotalConfirmed, 
            deaths: country.TotalDeaths,
            recovered: country.TotalRecovered,
            cCode: country.CountryCode}
          })
      this.setState({initialized: true, countryData: final})
    })
  }
/*TODOs:
    Map the heatmap to countries
    Create a table do display the data
*/

// Every function is called here. Map-container created as a container for the map to be displayed. Everything else is just calls.
  render(){
    if (this.state.initialized)
    {
      return (
        <div>
          <div id = "map-container" style = {{height: 0, width : 0}}></div>
          <Table data = {this.state.countryData}/>
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
