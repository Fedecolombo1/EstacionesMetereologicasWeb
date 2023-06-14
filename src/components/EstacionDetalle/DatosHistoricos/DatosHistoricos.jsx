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
import ExportCsvButton from "./ExportCsvButton/ExportCsvButton";

import { getFilteredHistoricalData } from '../../../Services/Estaciones/index.js';
import { getHistoricalData } from '../../../Services/Estaciones/index.js';

function DatosHistoricos({ estacion }) {
  const [graficoSeleccionado, setGraficoSeleccionado] = useState("Temperature");

  //Data estatica para testear chart
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature"
      },
    ],
  });


  const seleccionarGraficoHistorico = async (filtro) => {
    //Consumir del back
    try {

      const filteredData = await getHistoricalData(
        estacion.id,
        filtro,
      );

      const labels = filteredData.map((item) => item.recvTime);
      console.log(filtro);
      const dataValues = filteredData.map((item) => filtro == "Reliability" || filtro == "RelativeHumidity" ? parseFloat(item.attrValue * 100) : parseFloat(item.attrValue));

      // filteredData = await getFilteredHistoricalData(
      //   estacion.id,
      //   filtro,
      //   startDate,
      //   endDate
      // );
      
      setData({
        labels: labels,
        datasets: [{ label: filtro, data: dataValues }],
      });
  
      setGraficoSeleccionado(filtro);
    } catch (error) {
      console.log(error);
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

    return labels.map((date) => {
      const formattedDate = new Date(date).toLocaleString("es-ES");
      return formattedDate;
    });

    return labels;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const [startDate, setStartDate] = useState(new Date().setDate(new Date().getDate() - 7));
  const [endDate, setEndDate] = useState(new Date());

  const setFromDate = (value) => {    
    setStartDate(value)
    seleccionarGraficoHistorico()
  }
  const setToDate = (value) => {
    setEndDate(value)
    seleccionarGraficoHistorico()
  }

  const csvData = {
    estacionId: estacion.id,
    filter: graficoSeleccionado
  };

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
          <div className="col-4 row align">
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
          <div className="col-4 row align">
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

          <ExportCsvButton data={csvData}/>          
        </div>
      </div>
    </>
  );
}

export default DatosHistoricos;
