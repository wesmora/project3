import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import cities from "../../cities.json";
import staff from "../../players.json";

// let outbreakCount=0;

class Board extends React.Component {
       
    constructor(props){
        super(props)

        this.state = {
            staff,
            cities,
            sampleFound: false,
            proteinFound: false,
            scientistFound: false,
            immuneManFound: false,
            missionOne: false,
            missionTwo: false,
            missionThree: false,
            missionFour: false
          }; 
    }

    foundSample = () => {
        if (!this.state.sampleFound) {
        alert("You found a DNA sample of the virus")
        this.setState({ sampleFound: true });
        }
    }    

    foundProtein = () => {
        if (!this.state.proteinFound) {
        alert("You found a plant with the anti-Zombie protein")
        this.setState({ proteinFound: true });
        }
    }

    foundScientist = () => {
        if (!this.state.scientistFound) {
            alert("You found this missing scientist, Dr. Jasper")
            this.setState({ scientistFound: true });
        }
    }

    foundImmuneMan = () => {
        if (!this.state.immuneManFound) {
            alert("You found an immune patient")
            this.setState({ immuneManFound: true });
        }
    }

    mission1 = () => {
        if (!this.state.missionOne) {
        alert("Mission complete. Help the others")
        this.setState({ missionOne: true });
            if (this.state.missionTwo && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission2 = () => {
        if (!this.state.missionTwo) {
        alert("Mission complete. Help the others")
        this.setState({ missionTwo: true });
            if (this.state.missionOne && this.state.missionThree && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission3 = () => {
        if (!this.state.missionThree) {
        alert("Mission complete. Help the others")
        this.setState({ missionThree: true });
            if (this.state.missionOne && this.state.missionTwo && this.state.missionFour) {
                this.props.winGame();
            }
        }
    }

    mission4 = () => {
        if (!this.state.missionFour) {
        alert("Mission complete. Help the others")
        this.setState({ missionFour: true });
            if (this.state.missionOne && this.state.missionTwo && this.state.missionThree) {
                this.props.winGame();
            }
        }
    }

    // outbreak = () => {
    //     outbreakCount++;
    //     alert("You've had an outbreak " + outbreakCount + " times.")
    // }

    render() {
        return (
         <div className="Board">
            {this.state.staff.map(person => (
                <Player
                    name={person.name}
                    occupation={person.occupation}
                    id={person.id}
                    key={person.id}
                    currentLocation={this.state.currentLocation}
                />
            ))}
            <CityList
                cities={cities}
                sampleCityId={this.props.sampleCityId}
                proteinCityId={this.props.proteinCityId}
                scientistCityId={this.props.scientistCityId}
                immuneManCityId={this.props.immuneManCityId}
                foundSample={this.foundSample}
                sample={this.state.sampleFound}
                mission1={this.mission1}
                foundProtein={this.foundProtein}
                protein={this.state.proteinFound}
                mission2={this.mission2}
                foundScientist={this.foundScientist}
                scientist={this.state.scientistFound}
                mission3={this.mission3}
                foundImmuneMan={this.foundImmuneMan}
                immuneMan={this.state.immuneManFound}
                mission4={this.mission4}
                loseGame={this.props.loseGame}
                />
            </div>
            );
          }
        }
           

export default Board;