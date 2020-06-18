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
// TODO write a function to return color in a range of certain colors
getColor= (num)=>{
  if (num<100)
    return "#19bd35"
  else if (num< 5000)
    return "#bbbd19"
  else if( num < 10000)
    return "#bd4219"
  else 
    return "#df430f"
}
// function to return data from the api called previously
findCountry = (key) =>{
  var temp= -1
  this.state.data.find(country=> {if (country.cCode === key)
    temp=country.deaths
  } )
  return temp
} 
// Style function to set color to each country based on the number of deaths, recovered, or infected people.
newStyle = (feature) =>{
  var found = this.findCountry(feature.get("iso_a2"))
  var Color = "grey";
  if (found > -1)
  {
    Color= this.getColor(found)
  }
  return new Style({
      fill: new Fill({
        color: Color
      }),
      stroke: new Stroke({
        color: 'rgba(255,255,255,0.8)'
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