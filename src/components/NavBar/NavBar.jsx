import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <header className="row align col-12">
        <Link className="col-2" to="/">
          <h1 className="col-12 nombre">Respirar</h1>
        </Link>
        <div className="col-10 row align linksContainer">
            <h2 className="col-2 align links">
              <Link to="/misEstaciones" className="navLinks">
                  Mis Estaciones
              </Link>
            </h2>       
        </div>
      </header>
    </>
  );
};

export default NavBar;
