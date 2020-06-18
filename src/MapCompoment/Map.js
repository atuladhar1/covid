import React from 'react'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import {Style, Fill, Stroke} from 'ol/style';

class wut extends React.Component {
// Constructor
  constructor(props){
    super()
    this.state = {data:props.data}
  }
// function to return data from the api called previously
findCountry = (key) =>{
  var a= -1
  this.state.data.find(country=> {if (country.cCode === key)
    a=country.deaths
  } )
  console.log(a)
  return a
} 
// Style function to set color to each country based on the number of deaths, recovered, or infected people.
newStyle = (feature) =>{
  var found = (this.findCountry(feature.get("iso_a2"))>-1) ? "blue": "black"
  return new Style({
      fill: new Fill({
        color: found
      })
    })
}
// Load map and the required information
  componentDidMount(){
    new Map({
      target: 'map-container',
      layers: [
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: require("./map.geojson")
          }),
          style: (feature)=>{
            return this.newStyle(feature)
          }
        })
      ],
      view: new View({
        center: [0, 0],
        zoom:4
      })
    });
    }
// Required method
  render() {
    return (<div></div>)
    }
}

export default wut