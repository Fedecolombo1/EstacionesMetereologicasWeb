import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import LineChart from "../LineChart/LineChart";
import { setTemperatureIcon, setColorTemp } from "../../../helpers";
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

function DatosHistoricos({estacion}) {
    const [graficoSeleccionado, setGraficoSeleccionado] = useState("Temperature");

    //Data estatica para testear chart
    const [data, setData] = useState({
        labels: [
        "1/9/2000",
        "10/9/2000",
        "21/9/2000",
        "23/9/2000",
        "29/9/2000",
        "30/9/2000",
        ],
        datasets: [
        {
            label: "Temperature",
            data: ["27", "24", "25", "22", "26", "29"],
        },
        ],
    });

    //Data dinamico
    // const [data, setData] = useState({
    //     labels: estaciones.map((data) => data.year),
    //     datasets: [{
    //         label: "Temperature",
    //         data: estaciones.map((data) => data.temperature)
    //     }]
    // });


    const seleccionarGraficoHistorico = (filtro) => {
        const datosHistoricos = {
            Temperature: [20, 26, 12, 23, 25, 5],
            RelativeHumidity: [50, 60, 45, 55, 58, 5],
            Reliability: [90, 85, 95, 92, 88, 5],
            Precipitation: [0, 5, 2, 8, 1, 5],
            pm1: [10, 12, 8, 11, 9, 5],
            pm10: [20, 18, 22, 25, 19, 5],
            pm25: [15, 17, 14, 16, 13, 5]
          };
    
        setData({labels: [
          "1/9/2000",
          "10/9/2000",
          "21/9/2000",
          "23/9/2000",
          "29/9/2000",
          "30/9/2000",
        ], 
        datasets: [{label: filtro, data: datosHistoricos[filtro]}]});
    
        setGraficoSeleccionado(filtro);
      }
          
  return (
    <>
        <h4 className="col-12 subtituloDatos">Datos historicos</h4>
        <h6 className="col-12">Seleccione un atributo para mostrar sus datos historicos</h6>

        <div className="col-12 col-lg-5 row align contenedorDeCardsActuales" >
            <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado  === "Temperature" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("Temperature")}>                  
            <div className="col-4 row align">
                <FontAwesomeIcon
                    icon={setTemperatureIcon(estacion.temperature.value)}
                    className="iconosEstacion"                    
                />
            </div>                      
            <h4 className="col-8 datoTitle">Temperatura</h4>
            </div>
            <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado  === "RelativeHumidity" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("RelativeHumidity")}>
            <div className="col-4 row">
                
            </div>
            <h4 className="col-8 datoTitle">Humedad relativa</h4>
            </div>
            <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado  === "Reliability" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("Reliability")}>
            <div className="col-4 row">

            </div>
            <h4 className="col-8 datoTitle">Fiabilidad</h4>
            </div>        
            <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado  === "Precipitation" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("Precipitation")}>
            <div className="col-4 row align">
                <FontAwesomeIcon
                icon={faDroplet}
                className="iconosEstacion"
                />
            </div>
            <h4 className="col-8 datoTitle">Precipitación</h4>
            </div>
            <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado === "pm1" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("pm1")}>
                <div className="col-4 row align">
                    <FontAwesomeIcon
                    icon={faDroplet}
                    className="iconosEstacion"
                    />
                </div>
                <h4 className="col-8 datoTitle">pm1</h4>
                </div>
                <div className={`col-6 row align cardDetailHistoricos ${graficoSeleccionado === "pm10" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("pm10")}>
                <div className="col-4 row align">
                    <FontAwesomeIcon
                    icon={faDroplet}
                    className="iconosEstacion"
                    />
                </div>
                <h4 className="col-8 datoTitle">pm10</h4>
                </div>
                <div className={`col-12 row align cardDetailHistoricos ${graficoSeleccionado === "pm25" ? "selected" : ""}`} onClick={() => seleccionarGraficoHistorico("pm25")}>
                <div className="col-4 row align">
                    <FontAwesomeIcon
                    icon={faDroplet}
                    className="iconosEstacion"
                    />
                </div>
                <h4 className="col-8 datoTitle">pm25</h4>
                </div>
        </div>
        <div className="col-12 col-lg-7 align cardDetail row">
            <LineChart chartData={data} />
            <p className="col-12">
            El gráfico de temperaturas históricas muestra cómo han variado
            las temperaturas a lo largo del tiempo. Se utiliza para observar
            tendencias y cambios climáticos a largo plazo, representando la
            temperatura en el eje vertical y el tiempo en el eje horizontal.
            Este tipo de gráfico es útil para comprender el calentamiento
            global, identificar patrones climáticos y analizar datos
            históricos de temperatura de forma visual.
            </p>

            <button className="col-5 col-lg-4 align btnExportarDatos">
            Exportar datos
            </button>
        </div>
    </>
  )
}

export default DatosHistoricos