import React from "react";
// import { Switch, Route } from "react-router-dom";

import "./index.css";

import Header from "./components/Header";
import Pilotos from "./components/Pilotos";
import SucosDeCevadis from "./components/SucosDeCevadis";
/* import Home from "./components/Home";
import Rogerinho from "./components/Rogerinho";
import Maurilio from "./components/Maurilio";
import Renan from "./components/Renan";
import Julinho from "./components/Julinho";
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Pilotos />
        <SucosDeCevadis />
      </div>
    );
  }
}

export default App;

/* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/rogerinho" component={Rogerinho} />
<Route exact path="/maurilio" component={Maurilio} />
<Route exact path="/renan" component={Renan} />
<Route exact path="/julinho" component={Julinho} />
</Switch> */
