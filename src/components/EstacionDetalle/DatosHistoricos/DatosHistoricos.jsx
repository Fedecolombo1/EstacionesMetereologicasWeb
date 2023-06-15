import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import LineChart from "../LineChart/LineChart";
import { setTemperatureIcon } from "../../../helpers";
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

function DatosHistoricos({ estacion }) {
  const [graficoSeleccionado, setGraficoSeleccionado] = useState("Temperature");

  //Data estatica para testear chart
  const [data, setData] = useState({
    labels: [],
    datasets: [{},],
  });


  const seleccionarGraficoHistorico = async (filtro) => {
    //Consumir del back
    try {
      const filteredData = await getFilteredHistoricalData(
        estacion.id,
        filtro,
        startDate,
        endDate
      );

      const labels = filteredData.map((item) => formatDate(new Date(item.recvTime)));      
      const dataValues = filteredData.map((item) => filtro === "Reliability" || filtro === "RelativeHumidity" ? parseFloat(item.attrValue * 100) : parseFloat(item.attrValue));      
      
      setData({
        labels: labels,
        datasets: [{ label: filtro, data: dataValues }],
      });
  
      setGraficoSeleccionado(filtro);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 7)));
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
      <h4 className="col-12 subtituloDatos" style={{marginTop: "20px"}}>Datos historicos</h4>
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

          <ExportCsvButton data={csvData}/>          
        </div>
      </div>
    </>
  );
}

export default DatosHistoricos;
