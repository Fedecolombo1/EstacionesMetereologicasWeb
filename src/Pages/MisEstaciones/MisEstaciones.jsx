import React from 'react'
import './MisEstaciones.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Estacion from '../../components/Estacion/Estacion';
import Page from '../../components/Page/Page';
import "bootstrap/dist/css/bootstrap.min.css";

function MisEstaciones() {
  return (
    <Page>
      <div className="contariner-fluid">
            <div className="row align">
                <Estacion />
                <Estacion />
                <Estacion />
                <Estacion />
                <Estacion />
                <Estacion />
                <Estacion />
                <Estacion />
            </div>
      </div>
    </Page>
  )
}

export default MisEstaciones