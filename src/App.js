import React from 'react';
import './App.css';
import Map from "./Map"
import Table from "./Table"

class App extends React.Component{

  constructor(){
    super()
    this.state={initialized: false, countryData:[], recov: false, dead : false,  infect:false}
  }

// API call from source and save it in the state as an array for easies data sorting.
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data=> {

      let final=[]
// sort(function(x,y){return x[1]-y[1]});
      const Countries = data.Countries
      for (let country in Countries)
          final.push(
            [
            country,
            Countries[country].Country, 
            Countries[country].TotalConfirmed, 
            Countries[country].TotalDeaths,
            Countries[country].TotalRecovered])
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
          <Table data = {this.state.countryData}/>
          <div id = "map-container" style = {{height: 200, width : 200}}></div>
          <Map/>
        </div>
      )
    }
    else {
      return <h1>wut</h1>
    }
    }
}

export default App;
