import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rotterdam" />
      </div>
    </div>
  );
}

export default App;
