import React from "react";

const Form = ({
  formData,
  setFormData,
  locationsCounter,
  setLocationsCounter,
  generate,
  index,
}) => {
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [locationsCounter]: {
        ...formData[locationsCounter],
        [event.target.name]: event.target.value,
      },
    });
  };

  const handlePrev = () => {
    if (locationsCounter > 1) {
      setLocationsCounter(locationsCounter - 1);
    }
  };

  const handleNext = () => {
    if (locationsCounter < generate) {
      setLocationsCounter(locationsCounter + 1);
    }
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
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Form;
