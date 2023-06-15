import React, { useContext, useEffect, useState } from 'react'
import './EstacionMapa.css'
import L from 'leaflet';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import MapContext from '../../../Context/MapaContext';

const iconEstation = new L.Icon({
    iconUrl: require('../../../Images/iotIcon4.png'),
    iconRetinaUrl: require('../../../Images/iotIcon4.png'),
    iconSize: [45,55],     
    className: 'leaflet-div-icon'
});

function EstacionMapa({ estacion }) {

    const [mostrar, setMostrar] = useState(false);
    const map = useMapEvents({})

    const click = () => {
        setMostrar(mostrar => !mostrar);   
        map.flyTo([estacion.location.value[0], estacion.location.value[1]], 13) 
        console.log(mostrar);   
    }

    const { mapCenter } = useContext(MapContext);

    useEffect(() => {
        map.flyTo(mapCenter, 12)
    },[mapCenter, map])
    return (
        <>
            <Marker position={{lat: estacion.location.value[0], lng: estacion.location.value[1]}} 
                icon={iconEstation} 
                eventHandlers={{
                    click: click,
                }}>                
                <Popup>
                    <div className="row align">
                        <p className='col-12 titulo'>{estacion.name.value}</p>
                        <p className='col-12 temperatura'>Temperatura {estacion.temperature.value}°C</p>                       
                        <Link to={`/estacion/${estacion.id}`} className="col-10 btnIrAlDetalle">
                            Ver detalle
                        </Link>
                    </div>                    
                </Popup>
            </Marker> 
        </>
    )
}

export default EstacionMapa