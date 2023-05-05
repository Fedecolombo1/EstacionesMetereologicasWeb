import React, { useEffect } from 'react'
import './Estacion.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CirculoData from '../CirculoData/CirculoData'
import { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Estacion({estacion, addFavorite, removeFavorite, favorito}) {

  const [temperatura, setTemperatura] = useState(0)
  const [fiabilidad, setFiabilidad] = useState(0)

  useEffect(() => {
    setTemperatura(27)
    setFiabilidad(32)
  },[])

  const favOnClick = (id) =>{
    if(favorito){
      removeFavorite(id)
    }else{
      addFavorite(id)
    }
    
  }
  return (
    <div className="col-11 col-md-3 row estacion align">       
        <div className="col-12 row align tituloFavContainer">
          <h1 className='title col-10'>{estacion.name}</h1>
          <FontAwesomeIcon className={`${favorito === true ? "btnCorazon col-1 corazon" : "btnCorazon col-2"}`} icon={faHeart} onClick={() => favOnClick(estacion.id)} />  
        </div>
        
        <div className="col-12 row" style={{justifyContent: "space-around"}}>
          <div className='col-5 row'>          
            <CirculoData col={"col-12"} value={temperatura} text="c"/>  
            <h2 className="tituloDato align">Temperatura</h2>        
          </div>

          <div className='col-5 row'>          
          <CirculoData col={"col-12"} value={fiabilidad} text="%"/>  
            <h2 className="tituloDato align">Fiabilidad</h2>        
          </div>      
        </div>
        

        <Link to={`/estacion/${estacion.id}`} className="col-5 align btnVerDetalles">
          Ver mas detalles
        </Link>
    </div>
  )
}

export default Estacion