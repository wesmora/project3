import React, { Component } from 'react';
//import Player from "./components/Player";
import Board from "../Board";
import cities from "../../cities.json";
//import './App.css';
import CityList from '../CityList';
import { connect } from "react-redux";
import {
    infectCity
   } from "../../redux/actions/loop";

function findRandom() {

        var randomnumber = Math.floor(Math.random()*6) + 1;

    
    return randomnumber;
}


class Loop extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            location: "Dallas",
            cities,
            locationOptions: ["Jacksonville", "New Orleans", "Memphis"],
            foundSample: false,
            infectionLevel: this.props.infection_level
          };
        
          
    }

    componentDidMount() {
    this.props.infectCity(2, 1);
    // this.setState({
    //     infectionLevel:this.props.infection_level
    // })
  }

// infect = () => {
//     const random = findRandom();
//     randoms.map(item => (
//         <p>{item}</p>
//     ))
// }

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
      <div className="Loop">
        {/* <header className="App-header">
          <h1 className="App-title">Zombie-itis</h1>
        </header> */}

        {this.infect}
        <Board />
        
        <CityList
          cities={cities}
          findId={findRandom()}
          infectionLevel={this.props.num}
        //   infect={this.infect}
        />
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

function mapStateToProps(state) {
    console.log(state, state.loop.infection_level.num, state.loop.infection_level.cityId);
    //this.props.infection_level
    const {num, cityId} = state.loop.infection_level;
    return { num, cityId}
   }
   
export default connect(mapStateToProps, {infectCity})(Loop)