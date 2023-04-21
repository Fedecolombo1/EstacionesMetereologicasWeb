import React, { useContext, useState } from 'react'
import './MapView.css'
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import EstacionMapa from './EstacionMapa/EstacionMapa';
import Search from './Search/Search';
import { EstacionesContext } from "../../Context/EstacionesContext";

function MapView() {

    const { estaciones } = useContext(EstacionesContext);

    const [focus, setFocus] = useState(false);    

    return (
        
        <MapContainer center={{lat: '-41.064890', lng: '-71.488120'}} zoom={13} scrollWheelZoom={true}>
            <Search focus={focus} setFocus={setFocus} estaciones={estaciones}/>
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
    )
}

export default MapView