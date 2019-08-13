import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";
import mockData from "../../mock-data";

export default class SucosConcentracao extends Component {
  render() {
    return (
      <div className="SucosConcentracao">
        <header className="SucosConcentracao-header">
          <h2>Sucos para Concentração</h2>
        </header>
        <Suco
          nome={mockData[0].name}
          imageUrl={mockData[0].image_url}
          abv={mockData[0].abv}
        />
      </div>
    );
  }
}
