import React, { useContext } from 'react'
import './MisEstaciones.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Estacion from '../../components/Estacion/Estacion';
import Page from '../../components/Page/Page';
import "bootstrap/dist/css/bootstrap.min.css";
import { EstacionesContext } from "../../Context/EstacionesContext";

function MisEstaciones() {

  const { estaciones } = useContext(EstacionesContext);

  return (
    <Page>
      <div className="contariner-fluid">
        <div className="header col-12 row align">
          <Link to={'/'} className='col-1 link align'>
            <FontAwesomeIcon className='flecha' icon={faArrowLeft} />
          </Link>
          <h1 className="titleEstaciones col-11">Estaciones</h1>
        </div>
        
        <div className="col-12 align row estacionesContainer" style={{margin: 0}}>
          {
            estaciones.map((estacion) => {
                return  <Estacion estacion={estacion}/>
            })
          }
        </div>
      </div>
    </Page>
  )
}

export default MisEstaciones