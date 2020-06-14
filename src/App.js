import React from 'react';
import './App.css';
import Map from "./Map"
import Table from "./Table"

class App extends React.Component{

  constructor(){
    super()
    this.state={initialized: false, countryData:{}}
  }

// API call from source and save it in the state.
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(data=> {
      const Countries = data.Countries

      for (let country in Countries)
        console.log(Countries[country].Country)
        //TODO add the data to table
        //TODO pass the table to map and table
        //TODO Set function to properly sort the data and show the data accordingly

    })
  }

// Every function is called here. Map-container created as a container for the map to be displayed. Everything else is just calls.
  render(){
    return (
      <div>
        <Table/>
      </div>
    );}
}

export default App;
