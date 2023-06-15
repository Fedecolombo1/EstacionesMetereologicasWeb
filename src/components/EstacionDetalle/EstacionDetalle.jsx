import React, { useEffect, useState } from "react";
import "./EstacionDetalle.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import VerticalBarChart from "./VerticalBarChart/VerticalBarChart";
import DatosHistoricos from "./DatosHistoricos/DatosHistoricos";
import { getEstacionById } from '../../Services/Estaciones/index.js'
import DatosActuales from "./DatosActuales/DatosActuales";
import PageHeader from '../../components/PageHeader/PageHeader';

function EstacionDetalle() {
  const [estacion, setEstacion] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getEstacionById(id)
    .then(estacionData => {
      setEstacion(estacionData);
    })
    .catch(error => {
      console.log(error);
    });
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
    <>
      {estacion ? (
        <>          
          <PageHeader titulo={estacion.name.value} backTo={'/misEstaciones'} />

          <div className="detailContainer row align">
            <div className="row col-12 align datosEstacionContainer">
              <DatosActuales estacion={estacion}/>
              <div className="col-12 col-lg-5 row align cardDetail graficoPm">
                <VerticalBarChart dataSet={[estacion.pm1.value, estacion.pm10.value, estacion.pm25.value]}/>
              </div>
              <DatosHistoricos estacion={estacion} setColor={setColor}/>
            </div>
          </div>
        </>
      ) : (
        <h1>Cargando estacion..</h1>
      )}  
    </>        
  );
}

export default EstacionDetalle;
