import React from 'react';
import './App.css';
import Map from "./Map"
import Table from "./Table"

class App extends React.Component{

  constructor(){
    super()
    this.state={initialized: false, data:{}}
  }

// API call from source and save it in the state.
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(final => this.setState({data:final, initialized : true}))
  }

// Every function is called here. Map-container created as a container for the map to be displayed. Everything else is just calls.
  render(){
    return (
      <div>
        <div id = "map-container" style = {{height: 1200, width : 1200}}></div>
        <Map/>
        <Table/>
      </div>
    );}
}

export default App;
