import React from 'react'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import {Style, Fill, Stroke} from 'ol/style';

class wut extends React.Component {
  constructor(props){
    super()
    this.state = {data:props.data}
  }
  newStyle = new Style({
    fill: new Fill({
      color: "blue"
    })
  }) 
  newStyle2 = new Style({
    fill: new Fill({
      color: "black"
    })
  })
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
            if(this.state.data.find(country=> country.cCode === feature.get("iso_a2") ))
              return this.newStyle
            console.log(feature.get("iso_a2"))
            return this.newStyle2
          },
          stroke: new Stroke({
            color: "red"
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom:4
      })
    });
    }


    render(props) {
    return (<h1>? ?</h1>)
    }
}

export default wut