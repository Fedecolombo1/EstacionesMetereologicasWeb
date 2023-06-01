import React, { useEffect } from 'react'
import './Estacion.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CirculoData from '../CirculoData/CirculoData'
import { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imageUrl from "../../Images/iotIcon.png";

function Estacion({estacion, addFavorite, removeFavorite, favorito}) {

  const [temperatura, setTemperatura] = useState(0)
  const [precipitacion, setPrecipitacion] = useState(0)

  useEffect(() => {
    setTemperatura(estacion.temperature.value);
    setPrecipitacion(estacion.precipitation.value);
  }, [estacion.temperature, estacion.precipitation]);

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
          <h1 className='title col-10'>{estacion.name.value}</h1>
          <div className="col-1 align">
            <img className="estacionImagen" src={imageUrl} alt="Estación" />
          </div>
          <FontAwesomeIcon className={`${favorito === true ? "btnCorazon col-1 corazon" : "btnCorazon col-2"}`} icon={faHeart} onClick={() => favOnClick(estacion.id)} />  
        </div>
        
        <div className="col-12 row" style={{justifyContent: "space-around"}}>
          <div className='col-5 row align'>          
            <CirculoData col={"col-12 col-lg-10"} value={temperatura} text="°c"/>  
            <h2 className="tituloDato align">Temperatura</h2>        
          </div>

          <div className='col-5 row align'>          
          <CirculoData col={"col-12 col-lg-10"} value={precipitacion} text="%"/>  
            <h2 className="tituloDato align">Precipitacion</h2>        
          </div>      
        </div>
        

        <Link to={`/estacion/${estacion.id}`} className="col-5 align btnVerDetalles">
          Ver mas detalles
        </Link>
    </div>
  )
}

export default Estacion