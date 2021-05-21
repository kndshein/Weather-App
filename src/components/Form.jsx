import React from "react";

const Form = ({
  formData,
  setFormData,
  locationsCounter,
  setLocationsCounter,
  generate,
  index,
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
    // if (!formData[locationsCounter]) {
    //   setLatError(true);
    //   setLngError(true);
    // } else {
    //   if (
    //     formData[locationsCounter].lat > 90 ||
    //     formData[locationsCounter].lat < -90
    //   ) {
    //     setLatError(true);
    //   } else if (
    //     formData[locationsCounter].lng > 180 ||
    //     formData[locationsCounter].lng < -180
    //   ) {
    //     setLngError(true);
    //   } else {
    //     setLatError(false);
    //     setLngError(false);
    //     if (locationsCounter < generate) {
    //       setLocationsCounter(locationsCounter + 1);
    //     }
    //   }
    // }
  };

  return (
    <>
      <div>Location {index}</div>
      <form>
        <input
          onChange={handleOnChange}
          type="number"
          name="lat"
          placeholder="Latitude"
          value={
            formData[locationsCounter]
              ? formData[locationsCounter].lat
              : formData[0].lat
          }
        />
        <input
          onChange={handleOnChange}
          type="number"
          name="lng"
          placeholder="Longitude"
          value={
            formData[locationsCounter]
              ? formData[locationsCounter].lng
              : formData[0].lng
          }
        />
      </form>
      {latError && <div>Please enter a valid Latitude.</div>}
      {lngError && <div>Please enter a valid Longitude.</div>}
      {locationsCounter !== 1 && <button onClick={handlePrev}>Prev</button>}
      {locationsCounter < generate && (
        <button onClick={handleNext}>Next</button>
      )}
    </>
  );
};

export default Form;
