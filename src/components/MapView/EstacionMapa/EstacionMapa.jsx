import React, { useContext, useEffect, useState } from 'react'
import './EstacionMapa.css'
import L from 'leaflet';
import DatosEstacion from './DatosEstacion/DatosEstacion';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import MapContext from '../../../Context/MapaContext';

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

    const { mapCenter } = useContext(MapContext);

    useEffect(() => {
        map.flyTo(mapCenter, 12)
    },[mapCenter])

    return (
        <>
            <Marker position={{lat: estacion.lat, lng: estacion.lng}} 
                icon={iconEstation} 
                eventHandlers={{
                    click: click,
                }}>                
                <Popup>
                    <div className="row align">
                        <p className='col-12 titulo'>{estacion.name}</p>
                        <p className='col-12 temperatura'>Temperatura {estacion.temperature}°C</p>
                        <Link to={`/estacion/${estacion.id}`} className="col-10 btnIrAlDetalle">
                            Ver detalle
                        </Link>
                    </div>                    
                </Popup>
            </Marker> 
            {/* <DatosEstacion estacion={estacion} verDatos={mostrar} click={click}/> */}
        </>
    )
}

export default EstacionMapa