import React from "react";
import mockData from "./mock-data";

import "./index.css";

import Header from "./components/Header";
import Pilotos from "./components/Pilotos";
import SucosConcentracao from "./components/SucosConcentracao";

function App() {
  return (
    <div>
      <Header />
      <Pilotos />
      <SucosConcentracao sucos={mockData} />
    </div>
  );
}

export default App;
