import React from "react";

const Sunset = ({ sunsetData }) => {
  return (
    <>
      <div>
        {sunsetData?.location.region}, {sunsetData?.location.country}
      </div>
      <div>Sunrise: {sunsetData?.astronomy.astro.sunrise}</div>
      <div>Sunset: {sunsetData?.astronomy.astro.sunset}</div>
    </>
  );
};

export default Sunset;
