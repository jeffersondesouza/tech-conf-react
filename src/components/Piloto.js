import React from "react";
import { Link } from "react-router-dom";

const Piloto = props => {
  const { pilotoImg, nome, bio } = props;
  return (
    <div className="piloto">
      <img src={pilotoImg} className="piloto-img-top" alt="..." />
      <div className="piloto-body">
        <h5 className="piloto-title">{nome}</h5>
        <p className="piloto-text">{bio} </p>
        <Link to={props.path} className="btn btn-primary">
          Visitar Página
        </Link>
      </div>
    </div>
  );
};

export default Piloto;
