import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={initialized: false, data:{}}
  }


  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json()).
    then(final => this.setState({data:final, initialized : true}))
  }


  render(){
    console.log(this.state)
  return (
    <div>
      <h1>ello</h1>
      <div id = "map-container" style = {{height: 1200, width : 1200}}></div>
    </div>
  );}
}

export default App;
