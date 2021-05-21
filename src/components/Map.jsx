import React from "react";

const Map = ({ sunsetData }) => {
  // Mapbox API from .env
  const { REACT_APP_MAPBOXAPI } = process.env;

  return (
    <div className="map-image-container">
      <img
        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${sunsetData.location.lon},${sunsetData.location.lat},6,0/300x200?access_token=${REACT_APP_MAPBOXAPI}`}
        alt={`Map of ${sunsetData.location.name}, ${sunsetData.location.country}`}
      />
    </div>
  );
};

export default Map;
