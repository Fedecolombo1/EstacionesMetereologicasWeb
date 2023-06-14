import React, { useContext, useEffect, useState } from "react";
import "./EstacionDetalle.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { EstacionesContext } from "../../Context/EstacionesContext";
import CirculoData from "../CirculoData/CirculoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { setTemperatureIcon, setColorTemp } from "../../helpers";
import VerticalBarChart from "./VerticalBarChart/VerticalBarChart";
import DatosHistoricos from "./DatosHistoricos/DatosHistoricos";
import { getEstacionById } from '../../Services/Estaciones/index.js'

function EstacionDetalle() {
  const [estacion, setEstacion] = useState(null);

  const { estaciones } = useContext(EstacionesContext);

  const { id } = useParams();

  useEffect(() => {
    getEstacionById(id)
    .then(estacionData => {
      setEstacion(estacionData);
    })
    .catch(error => {
      console.log(error);
    });
    
    // //Comentar esto si se consume las estaciones del back
    // var estacionFiltrada = estaciones.filter(
    //   (estacion) => estacion.id.toString() === id
    // );
    // setEstacion(estacionFiltrada[0]);
  }, [id]);

  const setColor = (value) => {

    let color = "#7692E4";
    if (value > 30 && value < 60) {
      color = "#F99417";
    } else if (value > 60) {
      color = "#E67676";
    }
    return color;
  };

  return (
    <div className="detailContainer row align">
      {estacion ? (
        <>
          <div
            className="col-lg-12 col-12 row titleContainer align"
            style={{ justifyContent: "start" }}
          >
            <Link to={"/misEstaciones"} className="col-1 link align">
              <FontAwesomeIcon className="flecha" icon={faArrowLeft} />
            </Link>
            <h1 className="col-lg-10 col-10 titleEstacion">
              Datos {estacion.name.value}
            </h1>
          </div>

          <div className="row col-12 align datosEstacionContainer">
            <h4 className="col-12 subtituloDatos">Datos actuales</h4>
            <div className="col-12 col-lg-7 row align contenedorDeCardsActuales" >
              <div className="col-12 col-lg-6 row align cardDetail">      
                <FontAwesomeIcon
                      icon={setTemperatureIcon(estacion.temperature.value)}
                      className="col-1 iconosEstacion"
                      style={{ color: setColorTemp(estacion.temperature.value)}}
                    />          
                <h4
                  className="col-3 datoText"
                  style={{ color: setColorTemp(estacion.temperature.value) }}
                >                      
                  {estacion.temperature.value} °C
                </h4>
                <h4 className="col-7 datoTitle">Temperatura actual</h4>
              </div>
              <div className="col-12 col-lg-6 row align cardDetail">
                <div className="col-4 row">
                  <CirculoData                    
                    value={estacion.relativeHumidity.value * 100}
                    text="%"
                    color={setColor(estacion.relativeHumidity.value * 100)}
                  />
                </div>
                <h4 className="col-8 datoTitle">Humedad relativa actual</h4>
              </div>
              <div className="col-12 col-lg-6 row align cardDetail">
                <div className="col-4 row">
                  <CirculoData
                    value={estacion.reliability.value * 100}
                    text="%"
                    color={setColor(estacion.reliability.value * 100)}
                  />
                </div>
                <h4 className="col-8 datoTitle">Fiabilidad</h4>
              </div>        
              <div className="col-12 col-lg-6 row align cardDetail">
                  <FontAwesomeIcon
                    icon={faDroplet}
                    className="col-1 iconosEstacion"
                    style={{ color: setColor(estacion.precipitation.value) }}
                  />
                  <h4
                    className="col-3 datoText"
                    style={{ color: setColor(estacion.precipitation.value) }}
                  >
                    {estacion.precipitation.value} mm
                  </h4>
                <h4 className="col-7 datoTitle">Precipitación</h4>
              </div>
            </div>
            <div className="col-12 col-lg-5 row align cardDetail graficoPm">
              <VerticalBarChart dataSet={[estacion.pm1.value, estacion.pm10.value, estacion.pm25.value]}/>
              {/* <p>El gráfico muestra los niveles de partículas PM1, PM15 y PM20 en μg/m³, indicadores de la contaminación del aire. Los valores recomendados para una buena calidad del aire son: PM1: &lt;10 μg/m³ (promedio anual), PM15: &lt;15 μg/m³ (promedio anual) y PM20: &lt;20 μg/m³ (promedio anual). Límites diarios aceptables: PM1: hasta 25 μg/m³, PM15: hasta 35 μg/m³ y PM20: hasta 50 μg/m³. Observar y actuar si se superan los límites recomendados es importante para evaluar la calidad del aire.</p> */}
            </div>
            <DatosHistoricos estacion={estacion} setColor={setColor}/>
          </div>
        </>
      ) : (
        <h1>Cargando estacion..</h1>
      )}
    </div>
  );
}

export default EstacionDetalle;
