import React from "react";
import "./index.css";
import rogerinho from "./img/rogeirinho.jpg";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="title">React, Programação Reativa e outros Paranauês</h1>
      </header>

      <div className="piloto">
        <img src={rogerinho} className="piloto-img-top" alt="..." />
        <div className="piloto-body">
          <h5 className="piloto-title">Rogerinho do Ingá</h5>
          <p className="piloto-text">
            Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
            bibendum egestas augue arcu ut est. Interagi no mé,
          </p>
          <a href="/" className="btn btn-primary">
            Página do Rogerinho
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
