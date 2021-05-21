import React from "react";
import "./App.css";

import Form from "./components/Form";

let generate = 3;

function App() {
  const [location, setLocation] = React.useState({ 0: { lat: "", lng: "" } });
  const [locationCounter, setLocationCounter] = React.useState(1);
  // const [formCount, setFormCount] = React.useState()

  // React.useEffect(() => {

  // })

  return (
    <div className="App">
      <div>Hello!</div>
      {locationCounter === 1 && (
        <Form
          location={location}
          setLocation={setLocation}
          locationCounter={locationCounter}
          setLocationCounter={setLocationCounter}
          generate={generate}
        />
      )}
      {locationCounter === 2 && (
        <Form
          location={location}
          setLocation={setLocation}
          locationCounter={locationCounter}
          setLocationCounter={setLocationCounter}
          generate={generate}
        />
      )}
      {locationCounter === 3 && (
        <Form
          location={location}
          setLocation={setLocation}
          locationCounter={locationCounter}
          setLocationCounter={setLocationCounter}
          generate={generate}
        />
      )}
    </div>
  );
}

export default App;
