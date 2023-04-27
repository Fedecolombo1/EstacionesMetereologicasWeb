import React, { useEffect } from 'react'
import './Estacion.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Estacion({estacion}) {

  return (
    <Link to={`/estacion/${estacion.id}`} className="col-11 col-md-3 row estacion align">
        {/* <div className="col-12 imageContainer">
          <img className='imagen'src={require('../../Images/iotIcon.png')}/>
        </div> */}
        <h1 className='title'>{estacion.name}</h1>
        <h1 className='col-12 subtitle'>{estacion.lat}, {estacion.lng}</h1>
    </Link>
  )
}

export default Estacion