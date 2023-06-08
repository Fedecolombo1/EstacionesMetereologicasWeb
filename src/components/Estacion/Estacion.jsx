import React from 'react'
import './Estacion.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { faHeart, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imageUrl from "../../Images/iotIcon.png";
import { setColorTemp, setTemperatureIcon } from '../../helpers'

function Estacion({estacion, addFavorite, removeFavorite, favorito}) {

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
          <div className='col-6 row align datoActualContainer'>          
            <FontAwesomeIcon
                  icon={setTemperatureIcon(estacion.temperature.value)}
                  className="col-3 iconosEstacion"
                  style={{ color: setColorTemp(estacion.temperature.value)}}
                />
              <h4
                  className="col-6"
                  style={{ color: setColorTemp(estacion.temperature.value), margin: 0 }}
                >
                  {estacion.temperature.value}
                </h4>
              <h2 className="tituloDato align">Temperatura</h2>        
          </div>

          <div className='col-6 row align datoActualContainer'>   
            <FontAwesomeIcon
                  icon={faDroplet}
                  className="col-3 iconosEstacion"
                  style={{ color: '#7692e4'}}
                />
              <h4
                  className="col-6"
                  style={{ color: '#7692e4', margin: 0 }}
                >
                  {estacion.precipitation.value}mm
                </h4>
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