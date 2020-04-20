import React from "react";
import "./App.css";
import APOD from "./component/APOD/APOD.js";
import EPIC from "./component/EPIC/EPIC.js";
import MarsRoverPhotos from "./component/MarsRoverPhotos/MarsRoverPhotos.js"

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>NASA</h1>
      <APOD />
      {/* <EPIC /> */}
      {/* <MarsRoverPhotos /> */}
    </div>
  );
}

export default App;
