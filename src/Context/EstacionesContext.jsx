import { useEffect } from "react";
import { createContext, useState } from "react";

export const EstacionesContext = createContext();

export const EstacionesProvider = ({children}) => {

    const [estaciones, setEstaciones] = useState([]);

    useEffect(() => {
      // const obtenerDatosApi = async (lat, lng) => {
      //   try {
      //       const apiKey = "cdb9664a7da9450180432940232505";
      //       const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`;
      //       const response = await fetch(url);
      //       const data = await response.json();
    
      //       const temperatura = data.current.temp_c;
      //       const precipitacion = data.current.precip_mm;

      //       return { temperatura, porcentajePrecipitacion };
      //     } catch (error) {
      //       console.error("Error al obtener la temperatura:", error);
      //       return null;
      //     }
      //   };
        
        const obtenerEstaciones = async () => {
          const estacionesData = [
            {
              id: "urn:ngsi-ld:Estacion:est001",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Bariloche"
              },
              dateObserved: {
                type: "Text",
                value: "2016-03-15T11:00:00/2016-03-15T12:00:00"
              },
              location: {
                type: "Point",
                value: [-41.054731, -71.530631]
              },
              temperature: {
                type: "Float",
                value: 12.2
              },
              relativeHumidity: {
                type: "Float",
                value: 0.2
              },
              reliability: {
                type: "Float",
                value: 0.7
              },
              pm1: {
                type: "Float",
                value: 10
              },
              pm10: {
                type: "Float",
                value: 15
              },
              pm25: {
                type: "Float",
                value: 20
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est002",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Meliquina"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-40.376109, -71.260329]
              },
              temperature: {
                type: "Float",
                value: 8.5
              },
              relativeHumidity: {
                type: "Float",
                value: 0.4
              },
              reliability: {
                type: "Float",
                value: 0.6
              },
              pm1: {
                type: "Float",
                value: 8
              },
              pm10: {
                type: "Float",
                value: 14
              },
              pm25: {
                type: "Float",
                value: 21
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est003",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Cerro quemado"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-41.015814, -71.499827]
              },
              temperature: {
                type: "Float",
                value: 30.7
              },
              relativeHumidity: {
                type: "Float",
                value: 0.3
              },
              reliability: {
                type: "Float",
                value: 0.8
              },
              pm1: {
                type: "Float",
                value: 9
              },
              pm10: {
                type: "Float",
                value: 16
              },
              pm25: {
                type: "Float",
                value: 23
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est004",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Buenos Aires"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-34.603727, -58.381846]
              },
              temperature: {
                type: "Float",
                value: 24.1
              },
              relativeHumidity: {
                type: "Float",
                value: 0.5
              },
              reliability: {
                type: "Float",
                value: 0.9
              },
              pm1: {
                type: "Float",
                value: 7
              },
              pm10: {
                type: "Float",
                value: 12
              },
              pm25: {
                type: "Float",
                value: 18
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est005",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Nuñez"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-34.539481, -58.451262]
              },
              temperature: {
                type: "Float",
                value: 17.3
              },
              relativeHumidity: {
                type: "Float",
                value: 0.7
              },
              reliability: {
                type: "Float",
                value: 0.6
              },
              pm1: {
                type: "Float",
                value: 11
              },
              pm10: {
                type: "Float",
                value: 17
              },
              pm25: {
                type: "Float",
                value: 24
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est006",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion La Pampa"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-37.344743, -65.103011]
              },
              temperature: {
                type: "Float",
                value: 19.8
              },
              relativeHumidity: {
                type: "Float",
                value: 0.4
              },
              reliability: {
                type: "Float",
                value: 0.7
              },
              pm1: {
                type: "Float",
                value: 10
              },
              pm10: {
                type: "Float",
                value: 16
              },
              pm25: {
                type: "Float",
                value: 23
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est007",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Cordoba"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-31.420083, -64.188776]
              },
              temperature: {
                type: "Float",
                value: 22.6
              },
              relativeHumidity: {
                type: "Float",
                value: 0.6
              },
              reliability: {
                type: "Float",
                value: 0.8
              },
              pm1: {
                type: "Float",
                value: 9
              },
              pm10: {
                type: "Float",
                value: 15
              },
              pm25: {
                type: "Float",
                value: 22
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est008",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Mendoza"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-32.890183, -68.844049]
              },
              temperature: {
                type: "Float",
                value: 21.3
              },
              relativeHumidity: {
                type: "Float",
                value: 0.5
              },
              reliability: {
                type: "Float",
                value: 0.9
              },
              pm1: {
                type: "Float",
                value: 8
              },
              pm10: {
                type: "Float",
                value: 14
              },
              pm25: {
                type: "Float",
                value: 21
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est009",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Salta"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-24.782127, -65.423198]
              },
              temperature: {
                type: "Float",
                value: 26.5
              },
              relativeHumidity: {
                type: "Float",
                value: 0.4
              },
              reliability: {
                type: "Float",
                value: 0.7
              },
              pm1: {
                type: "Float",
                value: 7
              },
              pm10: {
                type: "Float",
                value: 13
              },
              pm25: {
                type: "Float",
                value: 20
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est010",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Tucuman"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-26.808285, -65.217590]
              },
              temperature: {
                type: "Float",
                value: 28.2
              },
              relativeHumidity: {
                type: "Float",
                value: 0.6
              },
              reliability: {
                type: "Float",
                value: 0.8
              },
              pm1: {
                type: "Float",
                value: 9
              },
              pm10: {
                type: "Float",
                value: 15
              },
              pm25: {
                type: "Float",
                value: 22
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est011",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion Mar del Plata"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-38.005477, -57.541573]
              },
              temperature: {
                type: "Float",
                value: 19.8
              },
              relativeHumidity: {
                type: "Float",
                value: 0.7
              },
              reliability: {
                type: "Float",
                value: 0.9
              },
              pm1: {
                type: "Float",
                value: 10
              },
              pm10: {
                type: "Float",
                value: 16
              },
              pm25: {
                type: "Float",
                value: 23
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            },
            {
              id: "urn:ngsi-ld:Estacion:est012",
              type: "Estacion",
              name: {
                type: "Text",
                value: "Estacion San Juan"
              },
              dateObserved: {
                type: "Text",
                value: ""
              },
              location: {
                type: "Point",
                value: [-31.537500, -68.536390]
              },
              temperature: {
                type: "Float",
                value: 25.3
              },
              relativeHumidity: {
                type: "Float",
                value: 0.5
              },
              reliability: {
                type: "Float",
                value: 0.8
              },
              pm1: {
                type: "Float",
                value: 8
              },
              pm10: {
                type: "Float",
                value: 14
              },
              pm25: {
                type: "Float",
                value: 21
              },
              precipitation: {
                type: "Float",
                value: 0
              }
            }
          ];
          
  
        setEstaciones(estacionesData);
      };
  
      obtenerEstaciones();
    }, []);

    return(
        <EstacionesContext.Provider value={{estaciones}}>
            {children}
        </EstacionesContext.Provider>
    )
}
