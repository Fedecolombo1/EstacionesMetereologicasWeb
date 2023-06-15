export const getEstaciones = () => {
  return fetch('http://localhost:3004/estaciones')
    .then(response => {         
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
};

  
  export const getEstacionById = (id) => {
    return fetch(`http://localhost:3004/estacion/${id}`)
      .then(response => {         
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  
  export const getHistoricalData = (id, attribute) => {
    return fetch(`http://localhost:3004/getHistoricosById/?id=${id}&attr=${attribute}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  export const getFilteredHistoricalData = (id, attribute, minDate, maxDate) => {
    return fetch(`http://localhost:3004/getHistoricosByIdFecha/?id=${id}&attr=${attribute}&minDate=${minDate}&maxDate=${maxDate}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  