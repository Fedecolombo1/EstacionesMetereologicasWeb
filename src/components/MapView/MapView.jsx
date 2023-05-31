import React, { useContext, useEffect, useState } from 'react'
import './MapView.css'
import { MapContainer, TileLayer } from "react-leaflet";
import EstacionMapa from './EstacionMapa/EstacionMapa';
import { EstacionesContext } from "../../Context/EstacionesContext";

function MapView() {

    const { estaciones } = useContext(EstacionesContext);
    const [focus, setFocus] = useState(false);       

    return (
        <>
            <MapContainer id='mapContainer' center={{lat: '-41.064890', lng: '-71.488120'}} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution=''
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />       
                    {
                        estaciones.map((estacion) => {
                            return  <EstacionMapa estacion={estacion}/>
                        })
                    }             
            </MapContainer>
        </>        
    )
}

export default MapView