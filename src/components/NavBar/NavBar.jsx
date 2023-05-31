import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navMenu.css"
import Search from '../../components/MapView/Search/Search';
import { EstacionesContext } from "../../Context/EstacionesContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {

  const { estaciones } = useContext(EstacionesContext);

  const [focus, setFocus] = useState(false);   

  const locationPath = useLocation()

  return (
    <>
      <header className="row align col-12 desk">
        <Link className="col-4 col-md-2" to="/">
          <h1 className="col-12 nombre">Respirar</h1>
        </Link>
        <div className="col-5 col-md-10 row align linksContainer desk">            
            <h2 className="col-6 col-md-2 align links">
              <Link to="/AboutUs" className="links">
                  About Us
              </Link>              
            </h2>
            <h2 className="col-6 col-md-2 align links">
              <Link to="/misEstaciones" className="links">
                  Mis Estaciones
              </Link>              
            </h2>                              
          </div>
      </header>

      <header className="col-12 align mobile">
        <nav className="col-12 align navbar">
          <nav role="navigation" className="col-4">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul className='col-12 row' id="menu">
                <Link
                  to="/"
                >
                  <li className='col-12'>Home</li>
                </Link>
                <Link
                  to="/misEstaciones"
                >
                  <li className='col-12'>Mis estaciones</li>
                </Link>
                <Link
                  to="/aboutus"
                >
                  <li className='col-12'>About us</li>
                </Link>
              </ul>
            </div>
          </nav>
          <Link to="/" className="col-4">
            <h1 className="nombre">Respirar</h1>
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
