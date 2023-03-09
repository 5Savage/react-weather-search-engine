import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      
      <Weather />
      <footer>
        Open source code by {" "} 
        <a href="https://github.com/5Savage/react-weather-search-engine" target="_blank"> Myah Savage</a>
      </footer>
    </div>
    </div>
  );
}


