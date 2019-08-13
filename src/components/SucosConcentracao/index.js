import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosConcentracao extends Component {
  state = { sucos: [] };

  componentDidMount() {
    this.setState({ sucos: [...this.props.sucos] });
  }

  renderSuco = suco => (
    <Suco
      key={suco.id}
      nome={suco.name}
      imageUrl={suco.image_url}
      abv={suco.abv}
    />
  );

  render() {
    const { sucos } = this.state;
    return (
      <div className="SucosConcentracao">
        <header className="SucosConcentracao-header">
          <h2>Sucos para Concentração</h2>
        </header>
        <div className="FiltroSucos">
          <form>
            <input
              className="FiltroSucos-input"
              placeholder="Qual o suco do Piloto?"
            />
          </form>
        </div>
        {sucos.map(this.renderSuco)}
      </div>
    );
  }
}
