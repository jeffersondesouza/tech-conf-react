import React, { Component } from "react";

import { connect } from "react-redux";
import actions from "../../store/rootActions";

import "./styles.css";

import Suco from "./Suco";
import FiltroForm from "./FiltroForm";

class SucosDeCevadis extends Component {
  state = { sucos: [], isLoading: false, page: 1 };

  convertToJSON = res => res.json();

  atualizaCervejas = data =>
    this.setState(ps => ({ sucos: [...data, ...ps.sucos], page: ps.page + 1 }));

  componentDidMount() {
    this.props.dispatchLoadSucoDeCevadis(this.state.page);
  }

  handleFiltro = event => {
    const filtro = event.target.value.toLowerCase();
    const sucosEncontrados = this.props.sucos.filter(suco =>
      suco.name.toLowerCase().includes(filtro)
    );

    this.setState({ sucos: sucosEncontrados });
  };

  handleCarregarCevejas = () => {
    this.props.dispatchLoadSucoDeCevadis(this.state.page);
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

const mapStateToProps = state => ({
  sucoDeCevadis: { ...state.sucoDeCevadis }
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadSucoDeCevadis: page =>
    dispatch(actions.sucoDeCevadis.loadSucoDeCevadisRequest(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SucosDeCevadis);
