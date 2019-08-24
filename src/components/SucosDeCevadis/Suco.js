import React, { Component } from "react";

export default class Suco extends Component {
  render() {
    const { nome, imageUrl, abv, attenuationLevel } = this.props;

    return (
      <div className="Suco">
        <div className="Suco-img-block">
          <img src={imageUrl} alt={nome} className="Suco-img" />
        </div>
        <div className="Suco-nome">{nome}</div>
        <div className="Suco-abv">Teor {abv}</div>
        <div className="Suco-abv">Atenuação {attenuationLevel}</div>
        
      </div>
    );
  }
}
