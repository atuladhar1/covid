import React from 'react'
import 'ol/ol.css'
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';

class wut extends React.Component {
    
    componentDidMount() {
   
        new Map({
            target: 'map-container',
            layers: [
            new TileLayer({
                source: new XYZSource({
                url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
                })
            })
            ],
            view: new View({
            center: fromLonLat([-96.4247, 31.51073]),
            zoom: 4
            })
        });
    };

    render() {
    return (
            <h3> map = works</h3>
    )}
}

export default wut