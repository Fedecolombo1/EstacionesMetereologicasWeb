import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LineChart from "../LineChart/LineChart";
import { setTemperatureIcon, setColorTemp } from "../../../helpers";
import {
  faDroplet,
  faPercent,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./DatosHistoricos.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import exportToCSV from "../../../Services/Export";
import ExportCsvButton from "./ExportCsvButton/ExportCsvButton";

function DatosHistoricos({ estacion }) {
  const [graficoSeleccionado, setGraficoSeleccionado] = useState("Temperature");

  //Data estatica para testear chart
  const [data, setData] = useState({
    labels: [      
    ],
    datasets: [
      {
        label: "Temperature"
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
    pm25: [15, 17, 14, 16, 13, 5],
  };

  const labels = generateDateLabels(startDate, endDate);

  if(filtro != null){
    setData({
        labels: labels,
        datasets: [{ label: filtro, data: datosHistoricos[filtro] }],
      });
    setGraficoSeleccionado(filtro);
  }else{
    setData({
        labels: labels,
        datasets: [{ label: graficoSeleccionado, data: datosHistoricos[graficoSeleccionado] }],
      });
    setGraficoSeleccionado(graficoSeleccionado)
  }  
};

const generateDateLabels = (startDate, endDate) => {
  const labels = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const formattedDate = formatDate(currentDate);
    labels.push(formattedDate);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return labels;
};

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const setFromDate = (value) => {    
    setStartDate(value)
    seleccionarGraficoHistorico()
  }
  const setToDate = (value) => {
    setEndDate(value)
    seleccionarGraficoHistorico()
  }

  useEffect(() => {
    seleccionarGraficoHistorico(graficoSeleccionado);
  }, [startDate, endDate]);

  return (
    <>
      <h4 className="col-12 subtituloDatos">Datos historicos</h4>
      <h6 className="col-12">
        Seleccione un atributo para mostrar sus datos historicos
      </h6>

      <div className="col-12 col-lg-5 row align contenedorDeCardsActuales">
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "Temperature" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("Temperature")}
        >
          <div className="col-4 row align">
            <FontAwesomeIcon
              icon={setTemperatureIcon(estacion.temperature.value)}
              className="iconosEstacion"
            />
          </div>
          <h4 className="col-8 datoTitle">Temperatura</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "RelativeHumidity" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("RelativeHumidity")}
        >
          <div className="col-4 row">
            <FontAwesomeIcon icon={faDroplet} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">Humedad relativa</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "Reliability" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("Reliability")}
        >
          <div className="col-4 row">
            <FontAwesomeIcon icon={faPercent} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">Fiabilidad</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "Precipitation" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("Precipitation")}
        >
          <div className="col-4 row align">
            <FontAwesomeIcon icon={faDroplet} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">Precipitación</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "pm1" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("pm1")}
        >
          <div className="col-4 row align">
            <FontAwesomeIcon icon={faWind} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">pm1</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "pm10" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("pm10")}
        >
          <div className="col-4 row align">
            <FontAwesomeIcon icon={faWind} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">pm10</h4>
        </div>
        <div
          className={`col-12 col-lg-6 row align cardDetailHistoricos ${
            graficoSeleccionado === "pm25" ? "selected" : ""
          }`}
          onClick={() => seleccionarGraficoHistorico("pm25")}
        >
          <div className="col-4 row align">
            <FontAwesomeIcon icon={faWind} className="iconosEstacion" />
          </div>
          <h4 className="col-8 datoTitle">pm25</h4>
        </div>
      </div>
      <div className="col-12 col-lg-7 align row">
        <div className="col-12 align cardDetail row">
          <h6 className="col-12 dateTitle">
            Seleccione un rango de fechas para mostrar los datos historicos
          </h6>
          <div className="col-6">
            <p className="col-6 dateLabel">Fecha desde</p>
            <DatePicker
              selectsStart
              selected={startDate}
              onChange={(date) => setFromDate(date)}
              startDate={startDate}
              className="col-12 datePicker"
            />
          </div>
          <div className="col-6">
            <p className="col-6 dateLabel">Fecha hasta</p>
            <DatePicker
              selectsEnd
              selected={endDate}
              onChange={(date) => setToDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
              className="col-12 datePicker"
            />
          </div>
          <LineChart chartData={data} />
          <p className="col-12">
            El gráfico de temperaturas históricas muestra cómo han variado las
            temperaturas a lo largo del tiempo. Se utiliza para observar
            tendencias y cambios climáticos a largo plazo, representando la
            temperatura en el eje vertical y el tiempo en el eje horizontal.
            Este tipo de gráfico es útil para comprender el calentamiento
            global, identificar patrones climáticos y analizar datos históricos
            de temperatura de forma visual.
          </p>

          <ExportCsvButton data={data}/>          
        </div>
      </div>
    </>
  );
}

export default DatosHistoricos;
