import React from "react";

const Form = ({
  location,
  setLocation,
  locationCounter,
  setLocationCounter,
  generate,
}) => {
  const [formData, setFormData] = React.useState({ lat: "", lng: "" });

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handlePrev = () => {
    if (locationCounter > 1) {
      setLocationCounter(locationCounter - 1);
    }
  };

  const handleNext = () => {
    if (locationCounter < generate) {
      setLocationCounter(locationCounter + 1);
    }
  };

  return (
    <>
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
