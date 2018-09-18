import React from "react";
import CityList from "../CityList";
import Player from "../Player";
import staff from "../../players.json";
import cities from "../../cities.json";


class Board extends React.Component {
    state = {
        staff,
        currentLocation: "Dallas"
      };

    //   moveLocation = place => {
    //     if (place === "Jacksonville") {
    //       this.setState({ foundSample: true })
    //       alert("You found the sample of the Zombie virus");
    //     }
    //     this.setState({ location: place });
    //     //const locationOptions = [];
    //     const locationOptions= (this.state.connections.filter(connection => connection.location === place))[0].connections;
    //     console.log(locationOptions);
    //     this.setState({ locationOptions: locationOptions});
    //     if (place === "Atlanta" && this.state.foundSample===true) {
    //       alert("You win");
    //     }
    //   };

      
   
    //   renderCity(id) {
    //     return (
    //         <Player
    //             currentLocation={(this.state.connections.filter(city => city.id === id))}
    //             infectionRate={this.locations[i].infectionRate}
    //         />
    //     );
    // }


      
    render() {
        return (
        <div>
        {/* <CityList
          cities={cities}
          //findId={findRandom()}
        //   infect={this.infect}
        /> */}
            
            {this.state.staff.map(person => (
                <Player
                    name={person.name}
                    occupation={person.occupation}
                    id={person.id}
                    currentLocation={this.state.currentLocation}
                    //connections={this.state.connections}
                />
            ))}
           {console.log(this.state)}
        </div>
      );
    }
  }

export default Board;