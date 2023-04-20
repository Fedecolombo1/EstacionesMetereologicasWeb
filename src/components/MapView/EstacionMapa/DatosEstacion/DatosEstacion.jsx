import React from 'react'
import './DatosEstacion.css'

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DatosEstacion({verDatos, click}) {
  
  return (
    <nav className={verDatos ? "mostrarNav" : "oculto"}>
        <FontAwesomeIcon className='cruz' icon={faXmark} onClick={click}/>
    </nav> 
  )
}

export default DatosEstacion