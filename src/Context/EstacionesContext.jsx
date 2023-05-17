import { createContext, useState } from "react";

export const EstacionesContext = createContext();

export const EstacionesProvider = ({children}) => {

    const [estaciones, setEstaciones] = useState([
        { id:1, name: "Estacion Bariloche", year: '2023', temperature: '19', lat:'-41.054731', lng:'-71.530631'},
        { id:2, name: "Estacion Meliquina", year: '2018', temperature: '22', lat:'-40.376109', lng:'-71.260329'},
        { id:3, name: "Estacion Cerro quemado", year: '2020', temperature: '21', lat:'-41.015814', lng:'-71.499827'},
        { id:4, name: "Estacion Buenos Aires", year: '2015', temperature: '28', lat:'-34.603727', lng:'-58.381846'},
        { id:5, name: "Estacion Nuniez", year: '2017', temperature: '27', lat:'-34.539481', lng:'-58.451262'},
        { id:6, name: "Estacion la Pampa", year: '2016', temperature: '24', lat:'-37.344743', lng:'-65.103011'},
    ]);

    return(
        <EstacionesContext.Provider value={{estaciones}}>
            {children}
        </EstacionesContext.Provider>
    )
}
