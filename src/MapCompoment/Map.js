import React from 'react'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import {Style, Fill, Stroke} from 'ol/style';

class wut extends React.Component {
  componentDidMount(){
    let map = new Map({
      target: 'map-container',
      layers: [
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            url: require("./map.geojson")
          }),
          style: new Style ({
            fill: new Fill({
              color: "grey"
            })
          }),
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