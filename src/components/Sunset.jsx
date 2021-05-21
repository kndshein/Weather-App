import React from "react";

const Sunset = ({ sunsetData }) => {
  console.log(sunsetData);
  return (
    <>
      <div>
        {sunsetData?.location.region}, {sunsetData?.location.country}
      </div>
      <div>Sunrise: {sunsetData?.astronomy.astro.sunrise}</div>
      <div>Sunrise: {sunsetData?.astronomy.astro.sunset}</div>
    </>
  );
};

export default Sunset;