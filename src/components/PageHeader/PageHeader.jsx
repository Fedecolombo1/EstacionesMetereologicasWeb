import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Toggle } from '../../components/Toggle/Toggle';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './PageHeader.css'

function PageHeader({ titulo, backTo,  filtrarPorFavoritos, setFiltrarPorFavoritos }) {
    const location = useLocation();
  return (
    <div className="header col-12 row align">
        <div className='col-lg-6 col-12 row'>
            <Link to={backTo} className='col-1 link align'>
                <FontAwesomeIcon className='flecha' icon={faArrowLeft} />
            </Link>
            <div className="col-11 row">
                <h1 className="titleEstaciones col-12">{titulo}</h1> 
            </div>
        </div>
        
        {
            location.pathname === "/misEstaciones"
            ?
            <div className="col-12 col-lg-6 row align" style={{justifyContent: 'flex-end'}}>
                <h4 className='col-lg-4 col-10'>Filtrar por favoritos</h4>      
                <Toggle className="col-2" toggled={filtrarPorFavoritos} onClick={() => setFiltrarPorFavoritos(!filtrarPorFavoritos)}/>            
            </div>  
            :
            <></>
        }                            
    </div>  
  )
}

export default PageHeader

{
    <div
    className="col-lg-12 col-12 row titleContainer align"
    style={{ justifyContent: "start" }}
    >
        <Link to={"/misEstaciones"} className="col-1 link align">
            <FontAwesomeIcon className="flecha" icon={faArrowLeft} />
        </Link>
        <h1 className="col-lg-10 col-10 titleEstacion">
            Datos 
        </h1>
    </div>
}