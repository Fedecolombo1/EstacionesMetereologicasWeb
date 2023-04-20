import React from 'react'
import './MapView.css'
import { MapContainer, TileLayer } from "react-leaflet";
import EstacionMapa from './EstacionMapa/EstacionMapa';

function MapView() {

    return (
        <>
            <MapContainer center={{lat: '51.52437', lng: '13.41053'}} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />       

                <EstacionMapa lat={'51.52437'} lng={'13.41053'}/>
                <EstacionMapa lat={'51.55437'} lng={'13.45053'}/>
            </MapContainer>
        </>        
    )
}

export default MapView