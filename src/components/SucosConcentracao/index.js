import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosConcentracao extends Component {
  renderSuco = suco => (
    <Suco
      key={suco.id}
      nome={suco.name}
      imageUrl={suco.image_url}
      abv={suco.abv}
    />
  );

  render() {
    const { sucos } = this.props;
    return (
      <div className="SucosConcentracao">
        <header className="SucosConcentracao-header">
          <h2>Sucos para Concentração</h2>
        </header>
        {sucos.map(this.renderSuco)}
      </div>
    );
  }
}
