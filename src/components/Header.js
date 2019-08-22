import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">React, Programação Reativa e outros Paranauês</h1>
        Cervejas Carregadas {this.props.sucoDeCevadis.total || 0}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  sucoDeCevadis: { ...state.sucoDeCevadis }
});

export default connect(mapStateToProps)(Header);
