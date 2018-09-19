import React from "react";
import City from "../City";
import Player from "../Player";
import staff from "../../players.json";
import cities from "../../cities.json";

function findRandom() {
    var randomnumber = Math.floor(Math.random()*6) + 1;
    return randomnumber;
}

function findId(name) {
  const cityId = cities.filter(city => city.location === name);
  return cityId[0].id;
}

let element;

const random = findRandom();

class CityList extends React.Component {
       
  constructor(props){
      super(props)
        this.state = {
          staff,
          currentLocation: 3
        }
    }

    moveLocation = cityName => {
      const newCity = findId(cityName);
      this.setState({ currentLocation: newCity });
    }

    render() {

      this.cityMatches = id => {
  
      if (id===this.state.currentLocation) {
        element = 
        <div>{this.state.staff.map(staff => (
          <Player
              name={staff.name}
              occupation={staff.occupation}
              id={staff.id}
              currentLocation={this.state.currentLocation}
          />
        ))}</div>
        
      } else {
        element = null;
      }
    }
        return (

    <div className="cities">
      <ul className="city-list">
      {this.props.cities.map(item => (
        <li className="list-group-item">
        <City
          key={item.id}
          id={item.id}
          name={item.location}
          connections={item.connections}
          personLocationId={this.state.currentLocation}
          cityId={random}
          cityMatches={this.cityMatches(item.id)}
          moveLocation={this.moveLocation}
        />
        {element}
        </li>
      ))}
    </ul>
    </div>
  )}
};
  
  export default CityList;