import React, { useState} from 'react'
import './Search.css'
import { useMapEvents } from 'react-leaflet';

function Search({focus, setFocus, estaciones}) {

    const [searchInput, setSearchInput] = useState("");
    const map = useMapEvents({})

    const handleChange = (e) => {
        // e.preventDefault();
        setSearchInput(e.target.value); 
    };

    const handleClick = (e) => {
        e.preventDefault();
        setFocus(true)       
    }

    const onClickBtn = (lat, lng) => {
        setFocus(false)
        map.flyTo([lat, lng], 14)  
    }
    return (
        <div onMouseLeave={() => setFocus(false)} className='align'>
            <input
            type="text"
            placeholder="Busca una estacion"
            onChange={handleChange}
            onClick={handleClick}
            value={searchInput}
            className='searchInput' />
            {focus 
            ?
            <div className='resultados row'>

                { (searchInput.length > 0) ? 
                    estaciones.filter((estacion) => {
                    return estacion.name.match(searchInput)  
                    }).map((estacion) => {
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