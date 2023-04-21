import { createContext, useState } from "react";

export const EstacionesContext = createContext();

export const EstacionesProvider = ({children}) => {

    const [estaciones, setEstaciones] = useState([
        { name: "Estacion Bariloche", lat:'-41.054731', lng:'-71.530631'},
        { name: "Estacion Meliquina", lat:'-40.376109', lng:'-71.260329'},
        { name: "Estacion Cerro quemado", lat:'-41.015814', lng:'-71.499827'},
    ]);
    
    return(
        <EstacionesContext.Provider value={{estaciones}}>
            {children}
        </EstacionesContext.Provider>
    )
}