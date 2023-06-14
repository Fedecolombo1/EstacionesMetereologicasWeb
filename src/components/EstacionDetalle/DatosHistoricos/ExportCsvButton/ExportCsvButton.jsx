import React, { useState, useEffect } from 'react';
import { getHistoricalData } from '../../../../Services/Estaciones/index.js';
import { CSVLink } from 'react-csv';

function ExportCsvButton({ data }) {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchCsvData = async () => {
      const estacion = await getHistoricalData(data.estacionId, data.filter);

      const formattedData = estacion.map(element => ({
        Fecha: element.recvTime,
        'Id estacion': element.entityId,
        'Tipo de dato': element.attrName,
        Valor: element.attrValue
      }));

      setCsvData(formattedData);
    };

    fetchCsvData();
  }, [data.estacionId, data.filter]);

  return (
    <CSVLink
      data={csvData}
      filename="data.csv"
      className="col-5 col-lg-4 align btnExportarDatos"
    >
      Exportar datos
    </CSVLink>
  );
}

export default ExportCsvButton;
