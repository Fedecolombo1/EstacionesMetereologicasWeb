import React, { useContext } from 'react'
import './MisEstaciones.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Estacion from '../../components/Estacion/Estacion';
import Page from '../../components/Page/Page';
import "bootstrap/dist/css/bootstrap.min.css";
import { EstacionesContext } from "../../Context/EstacionesContext";
import { useEffect } from 'react';
import { useState } from 'react';
import { Toggle } from '../../components/Toggle/Toggle';

function MisEstaciones() {

  const { estaciones } = useContext(EstacionesContext);

  const [favorites, setFavorites] = useState([]);

  const [filtrarPorFavoritos, setFiltrarPorFavoritos] = useState(false)

  const addFavorite = (item) => {
    if (!favorites.includes(item)) {
      setFavorites([...favorites, item]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
    }
  };

  const removeFavorite = (index) => {
    const newFavorites = favorites.filter(i => i !== index);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  

  // Leer la lista de favoritos del almacenamiento local al montar el componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <Page>
      <div className="header col-12 row align">
        <div className='col-lg-6 col-12 row'>
          <Link to={'/'} className='col-1 link align'>
            <FontAwesomeIcon className='flecha' icon={faArrowLeft} />
          </Link>
          <div className="col-11 row">
            <h1 className="titleEstaciones col-7">Estaciones</h1> 
          </div>
        </div>
        
        <div className="col-12 col-lg-6 row align" style={{justifyContent: 'flex-end'}}>
          <h4 className='col-lg-4 col-10'>Filtrar por favoritos</h4>      
          <Toggle className="col-2" toggled={filtrarPorFavoritos} onClick={() => setFiltrarPorFavoritos(!filtrarPorFavoritos)}/>            
        </div>                      
      </div>  
      
      <div className="col-12 align row estacionesContainer" style={{margin: 0}}>
        {
          estaciones ? 
            !filtrarPorFavoritos 
            ?
            estaciones.map((estacion) => {
              // Verificar si la estación está en la lista de favoritos
              const esFavorito = favorites.includes(estacion.id);
              // Establecer el valor de la prop favorito
              const favorito = esFavorito ? true : false;
              return <Estacion addFavorite={addFavorite} removeFavorite={removeFavorite} estacion={estacion} favorito={favorito} />;
            })
            :          
            estaciones.filter(estacion => favorites.includes(estacion.id)).map((estacion) => {
              // Establecer el valor de la prop favorito
              const favorito = true;
              return <Estacion addFavorite={addFavorite} removeFavorite={removeFavorite} estacion={estacion} favorito={favorito} />;
            })      
          :
          <h4 className="col-9 align">No hay estaciones para mostrar</h4>           
        }        
      </div>
    </Page>
  )
}

export default MisEstaciones