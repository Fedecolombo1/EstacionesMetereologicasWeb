import React, { useEffect } from 'react'
import './Estacion.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CirculoData from '../CirculoData/CirculoData'
import { useState } from 'react'

function Estacion({estacion}) {

  const [temperatura, setTemperatura] = useState(0)
  const [pm5, setPm5] = useState(0)
  const [pm25, setPm25] = useState(0)

  useEffect(() => {
    setTemperatura(27)
    setPm5(82)
    setPm25(42)
  },[])

  return (
    <Link to={`/estacion/${estacion.id}`} className="col-11 col-md-3 row estacion align">
        {/* <div className="col-12 imageContainer">
          <img className='imagen'src={require('../../Images/iotIcon.png')}/>
        </div> */}
        <h1 className='title'>{estacion.name}</h1>
        <h1 className='col-12 subtitle'>{estacion.lat}, {estacion.lng}</h1>
        <CirculoData col={"col-4"} value={temperatura} text="c"/>
        <CirculoData col={"col-4"} value={pm5} text="pm"/>
        <CirculoData col={"col-4"} value={pm25} text="pm"/>
    </Link>
  )
}

export default Estacion