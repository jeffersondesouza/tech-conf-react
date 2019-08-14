import React from "react";

import "./index.css";

import Header from "./components/Header";
import Pilotos from "./components/Pilotos";
import SucosDeCevadis from "./components/SucosDeCevadis";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Pilotos />
        <SucosDeCevadis/>
      </div>
    );
  }
}

export default App;
