import React from 'react'
import CirculoData from "../../CirculoData/CirculoData";
import { setTemperatureIcon, setColorTemp } from "../../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

function DatosActuales({ estacion }) {
  return (
    <>
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
            value={parseInt(estacion.relativeHumidity.value * 100)}
            text="%"   
            color={"#7692E4"}                 
            />
        </div>
        <h4 className="col-8 datoTitle">Humedad relativa actual</h4>
        </div>
        <div className="col-12 col-lg-6 row align cardDetail">
        <div className="col-4 row">
            <CirculoData
            value={parseInt(estacion.reliability.value * 100)}
            text="%"
            color={"#7692E4"}
            />
        </div>
        <h4 className="col-8 datoTitle">Fiabilidad</h4>
        </div>        
        <div className="col-12 col-lg-6 row align cardDetail">
            <FontAwesomeIcon
            icon={faDroplet}
            className="col-1 iconosEstacion"                    
            />
            <h4
            className="col-3 datoText"                    
            >
            {estacion.precipitation.value} mm
            </h4>
        <h4 className="col-7 datoTitle">Precipitación</h4>
        </div>
    </div>
    </>
  )
}

export default DatosActuales