import React, { Component } from 'react';
import Board from "../../Board";
import './Game.css';

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

class Game extends Component {

  state = {
    immuneManCity: 16,
    scientistCity: 11,
    proteinCity: 6,
    sampleCity: 1
  };

  componentDidMount = () => {
    const sampleCityId = randomIntFromInterval(1,5);
    const proteinCityId = randomIntFromInterval(6,10);
    const scientistCityId = randomIntFromInterval(11,15);
    const immuneManCityId= randomIntFromInterval(16,20);
    this.setState({ sampleCity: sampleCityId, protienCity: proteinCityId, scientistCity: scientistCityId, immuneManCity: immuneManCityId })
  }

  winGame = () => {
      alert("You win");
  };

  loseGame = () => {
    alert("You lose");
  };

  render() {
    return (
      <div className="App">

        <Board
          sampleCityId={this.state.sampleCity}
          proteinCityId={this.state.proteinCity}
          scientistCityId={this.state.scientistCity}
          immuneManCityId={this.state.immuneManCity}
          winGame={this.winGame}
          loseGame={this.loseGame}
        />
      </div>
    );
  }
}

export default Game;