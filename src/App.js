import React from "react";
import "./App.css";

import Form from "./components/Form";

const generate = 3;

function App() {
  // State to keep track of locations
  const [locations, setLocations] = React.useState({ 0: { lat: "", lng: "" } });
  // State to keep track of the current location in app
  const [locationsCounter, setLocationsCounter] = React.useState(1);
  // State to generate number of forms from generate
  const [formCount, setFormCount] = React.useState();

  React.useEffect(() => {
    const newArr = [...Array(generate).keys()];
    setFormCount(newArr);
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
