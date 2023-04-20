import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home'
import MisEstaciones from './Pages/MisEstaciones/MisEstaciones'

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
    </Router>
  );
}