import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosConcentracao extends Component {
  render() {
    const { sucos } = this.props;
    return (
      <div className="SucosConcentracao">
        <header className="SucosConcentracao-header">
          <h2>Sucos para Concentração</h2>
        </header>
        <Suco
          nome={sucos[0].name}
          imageUrl={sucos[0].image_url}
          abv={sucos[0].abv}
        />
      </div>
    );
  }
}
