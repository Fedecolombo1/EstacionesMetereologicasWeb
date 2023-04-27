import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import MisEstaciones from './Pages/MisEstaciones/MisEstaciones'
import Detalle from "./Pages/Detalle/Detalle";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>        
          <Route exact path="/MisEstaciones">
            <MisEstaciones />
          </Route>        
        </Switch>
        <Route path="/estacion/:id">
            <Detalle />
        </Route>
    </Router>
  );
}