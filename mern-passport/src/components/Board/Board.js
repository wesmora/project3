import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import cities from "../../cities.json";
import staff from "../../players.json";

class Board extends React.Component {
       
    constructor(props){
        super(props)
        
        this.state = {
            //location: "Dallas",
            staff,
            cities,
            locationOptions: ["Jacksonville", "New Orleans", "Memphis"],
            foundSample: false
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
                    currentLocation={this.state.currentLocation}
                    moveLocation={this.moveLocation}
                    locationOptions={this.state.locationOptions}
                    //connections={this.state.connections}
                />
            ))}
            {/* <Player 
                //location={this.state.location}
                moveLocation={this.moveLocation}
                locationOptions={this.state.locationOptions}
            /> */}
            <CityList
                cities={cities}
                />
            </div>
            );
          }
        }
           

export default Board;