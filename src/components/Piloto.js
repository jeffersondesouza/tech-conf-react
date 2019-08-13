import React, { Component } from "react";

export default class Piloto extends Component {
  render() {
    const { pilotoImg, nome, bio } = this.props;

    return (
      <div className="piloto">
        <img src={pilotoImg} className="piloto-img-top" alt="..." />
        <div className="piloto-body">
          <h5 className="piloto-title">{nome}</h5>
          <p className="piloto-text">{bio} </p>
          <a href="/" className="btn btn-primary">
            Visitar Página
          </a>
        </div>
      </div>
    );
  }
}
