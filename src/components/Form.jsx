import React from "react";

const Form = ({
  formData,
  setFormData,
  locationsCounter,
  setLocationsCounter,
  generate,
  index,
}) => {
  //   const [formData, setFormData] = React.useState({ lat: "", lng: "" });

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
        />
        <input
          onChange={handleOnChange}
          type="number"
          name="lng"
          placeholder="Longitude"
        />
      </form>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Form;
