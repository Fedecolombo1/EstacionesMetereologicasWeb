import React, { createContext, useState } from 'react';

const MapContext = createContext();

export const MapContextProvider = ({ children }) => {
  const [mapCenter, setMapCenter] = useState([-41.064890, -71.488120]);

  const flyToLocation = (lat, lng) => {
    setMapCenter([lat, lng]);
  };

  return (
    <MapContext.Provider value={{ mapCenter, flyToLocation }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;
