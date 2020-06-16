import React from 'react'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'

class wut extends React.Component {
  componentDidMount(){

    new Map({
      target: 'map-container',
      layers: [
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: require("./countries.geojson")
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    }


    render(props) {
    return (<h1>? ?</h1>)
    }
}

export default wut