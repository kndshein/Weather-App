// Dependencies imports
import React from "react";
import axios from "axios";

// Component imports
import Form from "./components/Form";
import Sunset from "./components/Sunset";
import Map from "./components/Map";

import "./styles/App.css";

const generate = 3; // TODO: Variable to determine how many locations for the app

function App() {
  // Get keys from .env file
  const { REACT_APP_WEATHERAPI } = process.env;
  // State to keep track of locations
  const [locations, setLocations] = React.useState({ 0: { lat: "", lng: "" } });
  // State to keep track of the current location in app
  const [locationsCounter, setLocationsCounter] = React.useState(1);
  // State to hold number of generated forms
  const [formCount, setFormCount] = React.useState();
  // State to store Sunsets
  const [sunsets, setSunsets] = React.useState(null);

  React.useEffect(() => {
    // Generate forms based on generate variable
    setFormCount([...Array(generate).keys()]);
  }, []);

  // Function to get sunset data
  const getSunsets = () => {
    // Generate date for query in API call
    const newDate = new Date();
    const queryDate =
      newDate.getFullYear() +
      "-" +
      newDate.getMonth() +
      "-" +
      newDate.getDate();

    // Create an array of Promises
    const arrayOfPromises = Object.keys(locations)
      .slice(1)
      .map(async (location) => {
        return axios({
          method: "get",
          url: `http://api.weatherapi.com/v1/astronomy.json?key=${REACT_APP_WEATHERAPI}&q=${locations[location].lat},${locations[location].lng}&dt=${queryDate}`,
        });
      });

    return arrayOfPromises;
  };

  // Function to trigger getSunsets (callback)
  const handleSubmit = () => {
    // console.log();
    if (Object.keys(locations).length - 1 === generate) {
      // Once all the promises are fulfilled, the sunset data is stored in 'sunsets' state
      Promise.all(getSunsets()).then((data) => setSunsets(data));
    }
  };

  // Function to edit the locations after revealing sunsets
  const handleEdit = () => {
    setSunsets(null);
  };

  // Function to reset the locations
  const handleReset = () => {
    setLocationsCounter(1);
    setSunsets(null);
    setLocations({ 0: { lat: "", lng: "" } });
  };

  return (
    <div className="App">
      {/* Maps through Forms (disables when sunsets are submitted) */}
      {!sunsets && (
        <div className="forms">
          {formCount?.map((_, index) => {
            return (
              locationsCounter === index + 1 && (
                <Form
                  key={index}
                  index={index + 1}
                  formData={locations}
                  setFormData={setLocations}
                  locationsCounter={locationsCounter}
                  setLocationsCounter={setLocationsCounter}
                  generate={generate}
                />
              )
            );
          })}
          {/* Submit button only shows at last Form */}
          {locationsCounter === generate && (
            <button onClick={handleSubmit}>Submit Locations</button>
          )}
        </div>
      )}
      {/* Maps through array of sunset data */}
      {sunsets && (
        <>
          <div className="sunsets-container">
            {sunsets &&
              sunsets?.map((sunset, index) => {
                return (
                  <div className="sunset" key={index}>
                    <Map sunsetData={sunset.data} />
                    <Sunset sunsetData={sunset.data} />
                  </div>
                );
              })}
          </div>
          {/* Edit and Reset buttons that only show when sunset data has been generated */}
          <button onClick={handleEdit}>Edit Locations</button>
          <button onClick={handleReset}>Reset Locations</button>
        </>
      )}
    </div>
  );
}

export default App;
