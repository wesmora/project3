import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import cities from "../../cities.json";
import staff from "../../players.json";

class Board extends React.Component {
       
    constructor(props){
        super(props)

        this.state = {
            staff,
            cities,
            sampleFound: false,
            proteinFound: false
          }; 
    }
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
                />
            </div>
            );
          }
        }
           

export default Board;