import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosDeCevadis extends Component {
  state = { sucos: [] };

  componentDidMount() {
    this.setState({ sucos: [...this.props.sucos] });
  }

  handleFiltro = event => {
    const filtro = event.target.value.toLowerCase();
    const sucosEncontrados = this.props.sucos.filter(suco =>
      suco.name.toLowerCase().includes(filtro)
    );

    this.setState({ sucos: sucosEncontrados });
  };

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
      <div className="SucosDeCevadis">
        <header className="SucosDeCevadis-header">
          <h2>Sucos de Cevadis</h2>
        </header>
        <div className="FiltroSucos">
          <form>
            <input
              className="FiltroSucos-input"
              placeholder="Qual o suco do Piloto?"
              onKeyUp={this.handleFiltro}
            />
          </form>
        </div>
        <div className="SucosDeCevadis-lista">
          {sucos.length ? (
            sucos.map(this.renderSuco)
          ) : (
            <div className="SucosDeCevadis-lista-vazia">Nenhum suco com este nome</div>
          )}
        </div>
      </div>
    );
  }
}
