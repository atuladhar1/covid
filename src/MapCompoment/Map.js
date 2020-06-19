import React from 'react'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import {Style, Fill, Stroke} from 'ol/style';
import "./Map.css"

class Maperino extends React.Component {

// A manual function that assigns the color based on the information requested and the number passed in
getColor= (num)=>{
  if (this.state.display ==="deaths")
  {  
    if (num<100)
      return "#19bd35"
    else if (num< 5000)
      return "#bbbd19"
    else if (num< 25000)
      return "#F57803"
    else if( num < 100000)
      return "#D96A03"
    else 
      return "#e60000"
    }
  else if (this.state.display ==="recovered"){
    if (num<100)
      return "#e60000"
    else if (num< 5000)
      return "#D96A03"
    else if (num< 25000)
      return "#F57803"
    else if( num < 100000)
      return "#bbbd19"
    else 
      return "#19bd35"
  }
  else {
  if (num<500)
      return "#19bd35"
    else if (num< 25000)
      return "#bbbd19"
    else if (num< 125000)
      return "#F57803"
    else if( num < 500000)
      return "#D96A03"
    else 
      return "#e60000"}
}
// function that checks the data passed, and then returns a value requested
findCountry = (key) =>{
  var temp= -1
  var usless =this.state.data.find(country=> {if (country.cCode === key)
    temp=country[this.state.display]
  } )
  return temp
} 
/*
Loads the map and the required information.
Creates a map using the geojson file for country borders, fills the said borders with the determined colors,
then saves the map, and the layer in the state to be used later.
*/
componentDidMount(){
  var layer = new VectorLayer({
    source: new VectorSource({
      format: new GeoJSON(),
      url: require("./map.geojson")
    }),
    style: (feature)=>{
      var found = this.findCountry(feature.get("iso_a2"))
      var Color = "black";
      if (found > -1)
      {
        Color= this.getColor(found)
      }
      return new Style({
          fill: new Fill({
            color: Color
          }),
          stroke: new Stroke({
            color: '#424651'
          })
        })
    }
  })
  var map = new Map({
    target: 'map-container',
      layers: [layer],
    view: new View({
      center: [0, 0],
      zoom:4
    },
    )
  })
  this.setState({map: map, layer: layer})
}
/*
Updates the map to show the desired data.
First it checks if there is a change in the data requested, then it created a temporary storage for the previous iteration of map.
In the temporary map, it removed the layer and adds a new one based on the new information requested.
Changes the values of the map and the new layer
*/
componentDidUpdate(prevProps, prevState){
  if(this.props.display!== prevProps.display){
    var notMap = prevState.map
    notMap.removeLayer(prevState.layer)
    var layer = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: require("./map.geojson")
      }),
      style: (feature)=>{
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
  })
    notMap.addLayer(layer)
    this.setState({display: this.props.display, map:notMap, layer: layer})
  }
}
// Constructor
constructor(props){
  super()
  this.state = {data:props.data, display : props.display}
}
// Required method that generated a container for the map
  render() {
    return <div id = "map-container"></div>
    }
}

export default Maperino