import { useEffect } from "react";
import { createContext, useState } from "react";

export const EstacionesContext = createContext();

export const EstacionesProvider = ({children}) => {

    const [estaciones, setEstaciones] = useState([]);

    useEffect(() => {
      const obtenerDatosApi = async (lat, lng) => {
        try {
            const apiKey = "cdb9664a7da9450180432940232505";
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`;
            const response = await fetch(url);
            const data = await response.json();
    
            const temperatura = data.current.temp_c;
            const precipitacion = data.current.precip_mm;
            const porcentajePrecipitacion = calcularPorcentajePrecipitacion(precipitacion);

            return { temperatura, porcentajePrecipitacion };
          } catch (error) {
            console.error("Error al obtener la temperatura:", error);
            return null;
          }
        };
    
        const calcularPorcentajePrecipitacion = (precipitacion) => {
            // Realiza el cálculo del porcentaje utilizando el valor de precipitación
            // Puedes personalizar esta función según tus necesidades
            const porcentaje = (precipitacion / 10) * 100;
            return porcentaje;
          };
        
        const obtenerEstaciones = async () => {
            const estacionesData = [
            { id: 1, name: "Estacion Bariloche", year: "2023", lat: "-41.054731", lng: "-71.530631" },
            { id: 2, name: "Estacion Meliquina", year: "2018", lat: "-40.376109", lng: "-71.260329" },
            { id: 3, name: "Estacion Cerro quemado", year: "2020", lat: "-41.015814", lng: "-71.499827" },
            { id: 4, name: "Estacion Buenos Aires", year: "2015", lat: "-34.603727", lng: "-58.381846" },
            { id: 5, name: "Estacion Nuniez", year: "2017", lat: "-34.539481", lng: "-58.451262" },
            { id: 6, name: "Estacion la Pampa", year: "2016", lat: "-37.344743", lng: "-65.103011" },
            { id: 7, name: "Estacion Cordoba", year: "2019", lat: "-31.420083", lng: "-64.188776" },
            { id: 8, name: "Estacion Mendoza", year: "2021", lat: "-32.890183", lng: "-68.844049" },
            { id: 9, name: "Estacion Salta", year: "2017", lat: "-24.782127", lng: "-65.423198" },
            { id: 10, name: "Estacion Tucuman", year: "2018", lat: "-26.808285", lng: "-65.217590" },
            ];
  
        const estacionesConDatos = await Promise.all(
          estacionesData.map(async (estacion) => {
            const datos = await obtenerDatosApi(estacion.lat, estacion.lng);
            return { ...estacion, temperature: datos.temperatura, porcentajePrecipitacion: datos.porcentajePrecipitacion };
          })
        );
  
        setEstaciones(estacionesConDatos);
      };
  
      obtenerEstaciones();
    }, []);

    return(
        <EstacionesContext.Provider value={{estaciones}}>
            {children}
        </EstacionesContext.Provider>
    )
}
