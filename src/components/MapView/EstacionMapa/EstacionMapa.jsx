import React, { useState } from 'react'
import './EstacionMapa.css'
import L from 'leaflet';
import DatosEstacion from './DatosEstacion/DatosEstacion';
import { Marker } from 'react-leaflet';

const iconEstation = new L.Icon({
    iconUrl: require('../../../Images/iotIcon.png'),
    iconRetinaUrl: require('../../../Images/iotIcon.png'),
    iconSize: [45,45], 
    className: 'leaflet-div-icon'
});

function EstacionMapa({ lat, lng }) {

    const [mostrar, setMostrar] = useState(false);

    const click = () => {
        setMostrar(mostrar => !mostrar);        
    }

    return (
        <>
            <Marker 
                position={{lat: lat, lng: lng}} 
                icon={iconEstation} 
                eventHandlers={{
                    click: click,
                }}
            />   
            <DatosEstacion verDatos={mostrar} click={click}/>
        </>
    )
}

export default EstacionMapa