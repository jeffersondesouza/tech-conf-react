import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosDeCevadis extends Component {
  state = { sucos: [], isLoading: false };

  componentDidMount() {
    this.setState({ sucos: [...this.props.sucos] });
    // fetch cervejas
    // https://api.punkapi.com/v2/beers?page=2&per_page=3
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
              placeholder="Qual a escolhis?"
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
