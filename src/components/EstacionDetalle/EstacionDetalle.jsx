import React, { useContext, useEffect, useState } from 'react'
import './EstacionDetalle.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { EstacionesContext } from "../../Context/EstacionesContext";

function EstacionDetalle() {
    const [estacion, setEstacion] = useState(undefined);

    const { estaciones } = useContext(EstacionesContext);

    const { id } = useParams();

    useEffect(() => {
        var estacionFiltrada = estaciones.filter((estacion) => estacion.id == id)
        
        setEstacion(estacionFiltrada[0])
    },[])

    return (
        <div className="detailContainer row">
            {estacion 
            ?
                <>
                    <h1 className='titleEstacion col-12'>{estacion.name}</h1>
                    <div className="datosEstacionContainer col-12">
                        <h1 className='col-12'>Datos estacion</h1>
                    </div>
                </>
            :
                <h1>Loading..</h1>
            }
        </div>
    )
}

export default EstacionDetalle