import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import MisEstaciones from './Pages/MisEstaciones/MisEstaciones'
import Detalle from "./Pages/Detalle/Detalle";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Inicio from "./Pages/Inicio/Inicio";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/MisEstaciones">
          <MisEstaciones />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
      </Switch>
      <Route path="/estacion/:id">
        <Detalle />
      </Route>
    </Router>
  );
}