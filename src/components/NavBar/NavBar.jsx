import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navMenu.css"
import Search from '../../components/MapView/Search/Search';
import { EstacionesContext } from "../../Context/EstacionesContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import ciudadesLogo from '../../Images/ciudadesLogo.png'
import respirarLogo from '../../Images/RespirAR_Logo.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  const { estaciones } = useContext(EstacionesContext);

  const [focus, setFocus] = useState(false);   

  const locationPath = useLocation()  
  

  return (
    <>
      <header className="row align col-12 desk">
        <Link className="col-4 col-md-2 row" to="/">
        <img src={ciudadesLogo} alt="" className="col-4 col-xl-3" />            
        <h1 className="col-7 col-xl-5 nombre align">RespirAR</h1>
        </Link>
        <div className="col-5 col-md-10 row align linksContainer desk">            
            <Link to="/AboutUs" className="col-xl-2 col-lg-5 col-md-4 links row align">
                <FontAwesomeIcon icon={faUserGroup} className="col-1 icono"/>
                <h2 className="col-8 links">
                Sobre nosotros
                </h2>
            </Link>    
            <Link to="/misEstaciones" className="col-xl-2 col-lg-5 col-md-4 links row align">
                <FontAwesomeIcon icon={faChartSimple} className="col-1 icono"/>
                <h2 className="col-8 links">
                  Mis Estaciones
                </h2>
            </Link>                               
          </div>
      </header>

      <header className="col-12 align mobile">        
        <nav className="col-12 align navbar">          
          <nav role="navigation" className="col-2">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>
              
              <ul className='row align' id="menu">  
                <div className="col-12 align" style={{background: 'white'}}>
                  <img src={respirarLogo} alt="" className="col-9 logoCiudades"/>       
                </div>                       
                <Link
                  to="/" className='col-11 row align' style={{marginTop: "40px"}}
                >
                  <FontAwesomeIcon icon={faHouse} className="col-1 icono"/>
                  <li className="col-10 linkNav">Home</li>
                </Link>
                <Link
                  to="/misEstaciones" className='col-11 row align'
                >
                  <FontAwesomeIcon icon={faChartSimple} className="col-1 icono"/>
                  <li className="col-10 linkNav">Mis estaciones</li>
                </Link>
                <Link
                  to="/aboutus" className='col-11 row align'
                >
                  <FontAwesomeIcon icon={faUserGroup} className="col-1 icono"/>
                  <li className="col-10 linkNav">About us</li>
                </Link>
              </ul>
            </div>
          </nav>
          <Link to="/" className="col-8 row align">
            <img src={ciudadesLogo} alt="" className="col-3" />  
            <h1 className="nombre col-5 align">RespirAR</h1>
          </Link>        
        </nav>        
      </header>
      { locationPath.pathname === '/' 
      ?
      <Search focus={focus} setFocus={setFocus} estaciones={estaciones}/>
      :
      <></>
      }
      
    </>
  );
};

export default NavBar;
