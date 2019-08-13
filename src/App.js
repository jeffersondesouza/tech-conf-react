import React from "react";
import mockData from "./mock-data";

import "./index.css";

import Header from "./components/Header";
import Pilotos from "./components/Pilotos";
import SucosDeCevadis from "./components/SucosDeCevadis";

function App() {
  return (
    <div>
      <Header />
      <Pilotos />
      <SucosDeCevadis sucos={mockData} />
    </div>
  );
}

export default App;
