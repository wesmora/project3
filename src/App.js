import React, { Component } from 'react';
//import Player from "./components/Player";
//import Board from "./components/Board";
//import connections from "./cities.json";
import './App.css';
import Loop from './components/Loop';

class App extends Component {

  // state = {
  //   location: "Dallas",
  //   connections,
  //   locationOptions: ["Jacksonville", "New Orleans", "Memphis"],
  //   foundSample: false
  // };

  // moveLocation = place => {
  //   if (place === "Jacksonville") {
  //     this.setState({ foundSample: true })
  //     alert("You found the sample of the Zombie virus");
  //   }
  //   this.setState({ location: place });
  //   //const locationOptions = [];
  //   const locationOptions= (this.state.connections.filter(connection => connection.location === place))[0].connections;
  //   console.log(locationOptions);
  //   this.setState({ locationOptions: locationOptions});
  //   if (place === "Atlanta" && this.state.foundSample===true) {
  //     alert("You win");
  //   }
  // };

  // increaseInfectionLevel = id => {
  //   console.log(modify);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zombie-itis</h1>
        </header>
        <Loop />
        {/* <CityList
          cities={connections}
        /> */}
        {/* <Player 
          location={this.state.location}
          moveLocation={this.moveLocation}
          locationOptions={this.state.locationOptions}
        />
        <Board
          locations={this.state.connections}
          increaseInfectionLevel={this.changeInfectionLevel}
          heal={this.heal}
        /> */}
      </div>
    );
  }
}

export default App;
