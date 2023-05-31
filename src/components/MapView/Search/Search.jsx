import React, { useContext, useState} from 'react'
import './Search.css'
import MapContext from '../../../Context/MapaContext';

function Search({focus, setFocus, estaciones}) {

    const [searchInput, setSearchInput] = useState("");
    const [estacionesFiltradas, setEstacionesFiltradas] = useState("");

    const { flyToLocation } = useContext(MapContext);

    const handleChange = (value) => {
        setSearchInput(value);
        const estacionesFiltradas = estaciones.filter((estacion) => {      
            return (
                value &&
                estacion &&
                estacion.name &&
                estacion.name.toLowerCase().includes(value)
            )
        }) 
        setEstacionesFiltradas(estacionesFiltradas)
    };

    const handleClick = (e) => {
        e.preventDefault();
        setFocus(true)       
    }

    const onClickBtn = (lat, lng) => {
        setFocus(false)
        setSearchInput("")
        flyToLocation(lat, lng)  
    }

    return (
        <div onMouseLeave={() => setFocus(false)} className='align'>
            <input
            type="text"
            placeholder="Busca una estacion"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
            onClick={handleClick}           
            className='searchInput' />
            {focus 
            ?
            <div className='resultados row'>

                { (searchInput.length > 0) ? 
                    estacionesFiltradas.map((estacion) => {
                    return  <button onClick={() => onClickBtn(estacion.lat, estacion.lng)} className='col-12 btnEstacion'>{estacion.name}</button>
                    })
                    :
                    estaciones.map((estacion) => {
                    return  <button onClick={() => onClickBtn(estacion.lat, estacion.lng)} className='col-12 btnEstacion'>{estacion.name}</button>
                    })
                }
            </div>
            :
            <></>
            }
            

        </div>
    )
}

export default Search