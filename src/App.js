import React from 'react';
import './App.css';
import Map from "./Map"

function App() {
  return (
    <div>
      <h1>ello</h1>
      <div id = "map-container" style = {{height: 1200, width : 1200}}></div>
      <Map/ >
    </div>
  );
}

export default App;
