import React from "react";

import rogerinho from "../img/rogeirinho.jpg";
import renan from "../img/renan.jpg";
import maurilio from "../img/maurilio.jpg";
import julinho from "../img/julinho.jpg";

import Piloto from "./Piloto";

export default class Pilotos extends React.Component {
  render() {
    return (
      <>
        <div className="pilotos-dupla">
          <Piloto
            pilotoImg={rogerinho}
            nome="Rogerinho do Ingá"
            bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
          />
          <Piloto
            pilotoImg={renan}
            nome="Renan"
            bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
          />
        </div>
        <div className="pilotos-dupla">
          <Piloto
            pilotoImg={maurilio}
            nome="Maurilio"
            bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
          />
          <Piloto
            pilotoImg={julinho}
            nome="Julinho"
            bio="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Interagi no mé, "
          />
        </div>
      </>
    );
  }
}
