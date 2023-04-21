import React from 'react'
import './Estacion.css'

function Estacion({estacion}) {
  return (
    <div className="col-12 row estacion align">
        {/* <div className="col-12 imageContainer">
          <img className='imagen'src={require('../../Images/iotIcon.png')}/>
        </div> */}
        <h1 className='title'>{estacion.name}</h1>
        <h1 className='col-12 subtitle'>{estacion.lat}, {estacion.lng}</h1>
    </div>
  )
}

export default Estacion