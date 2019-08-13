import React from "react";
import "./index.css";

import Header from "./components/Header";
import Pilotos from "./components/Pilotos";
import SucosConcentracao from "./components/SucosConcentracao";

function App() {
  return (
    <div>
      <Header />
      <Pilotos />
      <SucosConcentracao />
    </div>
  );
}

export default App;
