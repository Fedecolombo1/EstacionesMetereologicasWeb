import React from 'react'
import './DatosEstacion.css'

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DatosEstacion({verDatos, click, estacion}) {
  
  return (
    <nav className={verDatos ? "mostrarNav" : "oculto"}>
      <FontAwesomeIcon className='cruz' icon={faXmark} onClick={click}/>
      <div className="row align" style={{margin: '10px'}}>
        <h3 className='title col-12'>{estacion.name}</h3>
        <div className="cardDatos col-12">
            <h1 className="datosTitle">CO2</h1>
            <h2 className="datosValue">5.02</h2>
        </div>
      </div>    
    </nav> 
  )
}

export default DatosEstacion