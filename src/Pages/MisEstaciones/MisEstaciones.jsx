import React from 'react'
import styles from '../../styles/MisEstaciones.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Estacion from '../components/Estacion';

function misEstaciones() {
  return (
    <div className={styles.container}>
      <div className={styles.estacionesContainer}>
        <Link className={styles.link} href="/">
          <FontAwesomeIcon className={styles.icono} icon={faArrowLeft} /> 
          <h1 className={styles.title}>Mis estaciones</h1>
        </Link>   
        <div className={styles.estaciones}>
          <Estacion />  
          <Estacion />   
          <Estacion />     
          <Estacion />           
        </div>   
      </div>
    </div>
  )
}

export default misEstaciones