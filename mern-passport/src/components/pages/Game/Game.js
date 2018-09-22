import React, { Component } from 'react';
import Board from "../../Board";
//import connections from "../../../connections.json";
import './Game.css';

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Game extends Component {

  state = {
    proteinCity: 6,
    sampleCity: 1
  };

  componentDidMount = () => {
    const sampleCityId = randomIntFromInterval(1,5);
    const proteinCityId = randomIntFromInterval(6,10);
    this.setState({ sampleCity: sampleCityId, protienCity: proteinCityId })
  }

  // moveLocation = place => {
  //   if (place === "Jacksonville") {
  //     this.setState({ foundSample: true })
  //     alert("You found the sample of the Zombie virus");
  //   }
  //   if (place === "Atlanta" && this.state.foundSample===true) {
  //     alert("You win");
  //   }
  // };

  render() {
    return (
      <div className="App">

        <Board
          sampleCityId={this.state.sampleCity}
          proteinCityId={this.state.proteinCity}
        />
      </div>
    );
  }
}

export default Game;