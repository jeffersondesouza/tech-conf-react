import React from "react";

import rogerinho from "../img/rogeirinho.jpg";
import renan from "../img/renan.jpg";
import maurilio from "../img/maurilio.jpg";
import julinho from "../img/julinho.jpg";

import Piloto from "./Piloto";

export default class Pilotos extends React.Component {
  state = {
    mostraPiostos: false
  };

  handleEsconderPilotos = () => {
    this.setState(prevState => {
      return {
        mostraPiostos: !prevState.mostraPiostos
      };
    });
  };

  render() {
    return (
      <div className="Pilotos">
        <div className="Pilotos-toogle">
          <button
            className="btn btn-primary"
            onClick={this.handleEsconderPilotos}
          >
            {this.state.mostraPiostos ? "Esconder Pilotos" : "Mostar Pilotos"}
          </button>
        </div>
        {this.state.mostraPiostos && (
          <>
            <div className="pilotos-dupla">
              <Piloto
                pilotoImg={rogerinho}
                nome="Rogerinho do Ingá"
                bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
                path="/rogerinho"
              />
              <Piloto
                path="/maurilio"
                pilotoImg={renan}
                nome="Renan"
                bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
              />
            </div>
            <div className="pilotos-dupla">
              <Piloto
                path="/renan"
                pilotoImg={maurilio}
                nome="Maurilio"
                bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
              />
              <Piloto
                path="/julinho"
                pilotoImg={julinho}
                nome="Julinho"
                bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
