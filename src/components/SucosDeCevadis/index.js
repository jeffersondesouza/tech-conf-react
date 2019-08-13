import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";
import FiltroForm from "./FiltroForm";

export default class SucosDeCevadis extends Component {
  state = { sucos: [], isLoading: false, page: 1 };

  convertToJSON = res => res.json();

  atualizaCervejas = data => this.setState({ sucos: [...data] });

  componentDidMount() {
    // fetch cervejas
    // https://api.punkapi.com/v2/beers?page=2&per_page=3

    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=3`)
      .then(this.convertToJSON)
      .then(this.atualizaCervejas);

    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }

  handleFiltro = event => {
    const filtro = event.target.value.toLowerCase();
    const sucosEncontrados = this.props.sucos.filter(suco =>
      suco.name.toLowerCase().includes(filtro)
    );

    this.setState({ sucos: sucosEncontrados });
  };

  handleCarregarCevejas = () => {
    console.log("carregar:");
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=3`)
      .then(this.convertToJSON)
      .then(data => {
        this.props.onCarrgarCervejas(data.length);

        this.setState(prevState => ({
          page: prevState.page + 1,
          sucos: [...prevState.sucos, ...data]
        }));
      });
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
          <div className="SucosDeCevadis-count">{sucos.length}</div>
        </header>
        <FiltroForm
          onFiltraCervejas={this.handleFiltro}
          onCarregarCevejas={this.handleCarregarCevejas}
        />
        <div className="SucosDeCevadis-lista">
          {sucos.length ? (
            sucos.map(this.renderSuco)
          ) : (
            <div className="SucosDeCevadis-lista-vazia">
              Nenhum suco com este nome
            </div>
          )}
        </div>
      </div>
    );
  }
}
