import React from "react";
import { FiSunset, FiSunrise } from "react-icons/fi";

const Sunset = ({ sunsetData }) => {
  return (
    <>
      <div className="location">
        {sunsetData?.location.region}, {sunsetData?.location.country}
      </div>
      <div className="sunrise-data">
        <FiSunrise /> Sunrise: {sunsetData?.astronomy.astro.sunrise}
      </div>
      <div className="sunset-data">
        <FiSunset /> Sunset: {sunsetData?.astronomy.astro.sunset}
      </div>
    </>
  );
};

export default Sunset;
