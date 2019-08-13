import React, { Component } from "react";

import "./styles.css";

import Suco from "./Suco";

export default class SucosConcentracao extends Component {
  render() {
    return (
      <div className="SucosConcentracao">
        <header className="SucosConcentracao-header">
          <h2>Sucos para Concentração</h2>
        </header>
        <Suco
          nome={MOCK[0].name}
          imageUrl={MOCK[0].image_url}
          abv={MOCK[0].abv}
        />
      </div>
    );
  }
}

const MOCK = [
  {
    id: 1,
    name: "Buzz",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5
  },
  {
    id: 2,
    name: "Trashy Blonde",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1
  },
  {
    id: 3,
    name: "Berliner Weisse With Yuzu - B-Sides",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.2
  },
  {
    id: 4,
    name: "Pilsen Lager",
    image_url: "https://images.punkapi.com/v2/4.png",
    abv: 6.3
  },
  {
    id: 5,
    name: "Avery Brown Dredge",
    image_url: "https://images.punkapi.com/v2/5.png",
    abv: 7.2
  },
  {
    id: 6,
    name: "Electric India",
    image_url: "https://images.punkapi.com/v2/6.png",
    abv: 5.2
  },
  {
    id: 7,
    name: "AB:12",
    image_url: "https://images.punkapi.com/v2/7.png",
    abv: 11.2
  },
  {
    id: 8,
    name: "Fake Lager",
    image_url: "https://images.punkapi.com/v2/8.png",
    abv: 4.7
  },
  {
    id: 9,
    name: "AB:07",
    image_url: "https://images.punkapi.com/v2/9.png",
    abv: 12.5
  },
  {
    id: 10,
    name: "Bramling X",
    image_url: "https://images.punkapi.com/v2/10.png",
    abv: 7.5
  },
  {
    id: 11,
    name: "Misspent Youth",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 7.3
  },
  {
    id: 12,
    name: "Arcade Nation",
    image_url: "https://images.punkapi.com/v2/12.png",
    abv: 5.3
  },
  {
    id: 13,
    name: "Movember",
    image_url: "https://images.punkapi.com/v2/13.png",
    abv: 4.5
  },
  {
    id: 14,
    name: "Alpha Dog",
    image_url: "https://images.punkapi.com/v2/14.png",
    abv: 4.5
  },
  {
    id: 15,
    name: "Mixtape 8",
    image_url: "https://images.punkapi.com/v2/15.png",
    abv: 14.5
  },
  {
    id: 16,
    name: "Libertine Porter",
    image_url: "https://images.punkapi.com/v2/16.png",
    abv: 6.1
  },
  {
    id: 17,
    name: "AB:06",
    image_url: "https://images.punkapi.com/v2/17.png",
    abv: 11.2
  },
  {
    id: 18,
    name: "Russian Doll – India Pale Ale",
    image_url: "https://images.punkapi.com/v2/18.png",
    abv: 6
  },
  {
    id: 19,
    name: "Hello My Name Is Mette-Marit",
    image_url: "https://images.punkapi.com/v2/19.png",
    abv: 8.2
  },
  {
    id: 20,
    name: "Rabiator",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 10.27
  },
  {
    id: 21,
    name: "Vice Bier",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.3
  },
  {
    id: 22,
    name: "Devine Rebel (w/ Mikkeller)",
    image_url: "https://images.punkapi.com/v2/22.png",
    abv: 12.5
  },
  {
    id: 23,
    name: "Storm",
    image_url: "https://images.punkapi.com/v2/23.png",
    abv: 8
  },
  {
    id: 24,
    name: "The End Of History",
    image_url: "https://images.punkapi.com/v2/24.png",
    abv: 55
  },
  {
    id: 25,
    name: "Bad Pixie",
    image_url: "https://images.punkapi.com/v2/25.png",
    abv: 4.7
  }
];
