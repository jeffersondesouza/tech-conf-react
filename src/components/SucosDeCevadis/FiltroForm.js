import React, { Component } from "react";

export default class FiltroForm extends Component {
  render() {
    return (
      <div className="FiltroSucos">
        <form>
          <input
            className="FiltroSucos-input"
            placeholder="Qual a escolhis?"
            onKeyUp={this.props.onFiltraCervejas}
          />
        </form>
        <div>
          <button
            type="button"
            onClick={this.props.onCarregarCevejas}
            className="btn btn-primary"
          >
            Manda vê mais
          </button>
        </div>
      </div>
    );
  }
}
