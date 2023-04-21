import React, { useState } from 'react'
import './EstacionMapa.css'
import L from 'leaflet';
import DatosEstacion from './DatosEstacion/DatosEstacion';
import { Marker, useMapEvents } from 'react-leaflet';

const iconEstation = new L.Icon({
    iconUrl: require('../../../Images/iotIcon.png'),
    iconRetinaUrl: require('../../../Images/iotIcon.png'),
    iconSize: [45,45], 
    className: 'leaflet-div-icon'
});

function EstacionMapa({ estacion }) {

    const [mostrar, setMostrar] = useState(false);
    const map = useMapEvents({})

    const click = () => {
        setMostrar(mostrar => !mostrar);   
        map.flyTo([estacion.lat, estacion.lng], 14)     
    }
    return (
        <>
            <Marker 
                position={{lat: estacion.lat, lng: estacion.lng}} 
                icon={iconEstation} 
                eventHandlers={{
                    click: click,
                }}
            />   
            <DatosEstacion estacion={estacion} verDatos={mostrar} click={click}/>
        </>
    )
}

export default EstacionMapa