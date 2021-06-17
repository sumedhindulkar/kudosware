import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Fetch from "./Fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <div className="App">
      <Fetch />
    </div>
  );
}

export default App;
