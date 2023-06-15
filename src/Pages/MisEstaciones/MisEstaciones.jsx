import React, { useContext } from 'react'
import './MisEstaciones.css'
import Estacion from '../../components/Estacion/Estacion';
import Page from '../../components/Page/Page';
import "bootstrap/dist/css/bootstrap.min.css";
import { EstacionesContext } from "../../Context/EstacionesContext";
import { useEffect } from 'react';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

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
  
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <Page>
      <PageHeader titulo={"Mis estaciones"} backTo={"/"} filtrarPorFavoritos={filtrarPorFavoritos} setFiltrarPorFavoritos={setFiltrarPorFavoritos}/>
      
      <div className="col-12 align row estacionesContainer" style={{margin: 0}}>
        {
          estaciones ? 
            !filtrarPorFavoritos 
            ?
            estaciones.map((estacion) => {
              const esFavorito = favorites.includes(estacion.id);

              const favorito = esFavorito ? true : false;
              return <Estacion addFavorite={addFavorite} removeFavorite={removeFavorite} estacion={estacion} favorito={favorito} key={estacion.id}/>;
            })
            :          
            estaciones.filter(estacion => favorites.includes(estacion.id)).map((estacion) => {

              const favorito = true;
              return <Estacion addFavorite={addFavorite} removeFavorite={removeFavorite} estacion={estacion} favorito={favorito} key={estacion.id}/>;
            })      
          :
          <h4 className="col-9 align">No hay estaciones para mostrar</h4>           
        }        
      </div>
    </Page>
  )
}

export default MisEstaciones