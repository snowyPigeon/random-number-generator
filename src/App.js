import React from "react";
import Generator from './components/Generator';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Random Number Generator</h1>
        <Generator />
      </div>
    </div>
  );
}

export default App;
