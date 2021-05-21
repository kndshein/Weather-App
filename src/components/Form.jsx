import React from "react";

const Form = ({
  formData,
  setFormData,
  locationsCounter,
  setLocationsCounter,
  generate,
  index,
  handleSubmit,
}) => {
  // States for latlng errors
  const [latError, setLatError] = React.useState();
  const [lngError, setLngError] = React.useState();

  // HandleChange for React Forms
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [locationsCounter]: {
        ...formData[locationsCounter],
        [event.target.name]: event.target.value,
      },
    });
  };

  // Function for Prev button
  const handlePrev = () => {
    // Errors if formData doesn't exist
    if (!formData[locationsCounter]) {
      setLatError(true);
      setLngError(true);
    } else {
      // No errors, subtracts locationsCounter
      if (
        formData[locationsCounter].lat <= 90 &&
        formData[locationsCounter].lat >= -90 &&
        formData[locationsCounter].lng <= 180 &&
        formData[locationsCounter].lng >= -180
      ) {
        setLatError(false);
        setLngError(false);
        if (locationsCounter > 1) {
          setLocationsCounter(locationsCounter - 1);
        }
      }
      // Latitude error check
      if (
        formData[locationsCounter].lat > 90 ||
        formData[locationsCounter].lat < -90 ||
        formData[locationsCounter].lat === undefined
      ) {
        setLatError(true);
      } else {
        setLatError(false);
      }
      // Longitude error check
      if (
        formData[locationsCounter].lng > 180 ||
        formData[locationsCounter].lng < -180 ||
        formData[locationsCounter].lng === undefined
      ) {
        setLngError(true);
      } else {
        setLngError(false);
      }
    }
  };

  // Function for Next button
  const handleNext = () => {
    if (!formData[locationsCounter]) {
      setLatError(true);
      setLngError(true);
    } else {
      // No errors, adds locationsCounter
      if (
        formData[locationsCounter].lat <= 90 &&
        formData[locationsCounter].lat >= -90 &&
        formData[locationsCounter].lng <= 180 &&
        formData[locationsCounter].lng >= -180
      ) {
        setLatError(false);
        setLngError(false);
        if (locationsCounter < generate) {
          setLocationsCounter(locationsCounter + 1);
        }
      }
      // Latitude error check
      if (
        formData[locationsCounter].lat > 90 ||
        formData[locationsCounter].lat < -90 ||
        formData[locationsCounter].lat === undefined
      ) {
        setLatError(true);
      } else {
        setLatError(false);
      }
      // Longitude error check
      if (
        formData[locationsCounter].lng > 180 ||
        formData[locationsCounter].lng < -180 ||
        formData[locationsCounter].lng === undefined
      ) {
        setLngError(true);
      } else {
        setLngError(false);
      }
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-location">Location {index} is at Latitude</div>{" "}
        <input
          onChange={handleOnChange}
          type="number"
          name="lat"
          placeholder="19.741755"
          value={
            formData[locationsCounter]
              ? formData[locationsCounter].lat
              : formData[0].lat
          }
        />{" "}
        and Longitude{" "}
        <input
          onChange={handleOnChange}
          type="number"
          name="lng"
          placeholder="-155.844437"
          value={
            formData[locationsCounter]
              ? formData[locationsCounter].lng
              : formData[0].lng
          }
        />{" "}
        .
      </form>
      <div className="error-messages-container">
        {/* Latitude and Longitutde errors that pops up based on state */}
        <div className={`error-message ${latError ? "show" : ""}`}>
          Please enter a valid Latitude.
        </div>
        <div className={`error-message ${lngError ? "show" : ""}`}>
          Please enter a valid Longitude.
        </div>
      </div>
      <div className="buttons-container">
        {/* Previous button (disabled if current location is the first one) */}
        {locationsCounter !== 1 && <button onClick={handlePrev}>Prev</button>}
        {/* Next button (disabled if current location is the last one) */}
        {locationsCounter < generate && (
          <button onClick={handleNext}>Next</button>
        )}
        {/* Submit button only shows at last Form */}
        {locationsCounter === generate && (
          <button className="submit-button" onClick={handleSubmit}>
            Submit Locations
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
