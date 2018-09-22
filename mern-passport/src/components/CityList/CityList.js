import React from "react";
import City from "../City";
import Player from "../Player";
import staff from "../../players.json";
import cities from "../../cities.json";

function findRandom() {
  var arr = []
  while(arr.length < 3){
      var randomnumber = Math.floor(Math.random()*10) + 1;
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }
    return arr;
}

function findId(name) {
  const cityId = cities.filter(city => city.location === name);
  return cityId[0].id;
}

let element;

let random = findRandom();

let actions = 0;

class CityList extends React.Component {
       
  constructor(props){
      super(props)
        this.state = {
          staff,
          refresh: false,
          currentLocation1: 3, 
          currentLocation2: 8
        }
    }

    moveLocation1 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.sampleCityId) {
        alert("You found a DNA sample of the virus")
      }
      this.setState({ currentLocation1: newCity });
      this.increaseCount();
    }

    refreshRandom = () => {
      this.setState({ refresh: !this.state.refresh });
      actions=0;
    }

    increaseCount = () => {
      actions++;
      if (actions > 2) {
        random=findRandom();
      }
      if (actions > 3) {
        this.refreshRandom();
      }
      console.log(actions);
    }

    moveLocation2 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.proteinCityId) {
        alert("You found a plant with the anti-Zombie protein")
      }
      this.setState({ currentLocation2: newCity });
      this.increaseCount();
    }

    render() {
      this.cityMatches = id => {  
      if (id===this.state.currentLocation1) {
        element = 
        <div>
          <Player
              key={this.state.staff[0].id}
              name={this.state.staff[0].name}
              occupation={this.state.staff[0].occupation}
              id={this.state.staff[0].id}
              currentLocation1={this.state.currentLocation1}
          />
        </div>
        
      } else if (id===this.state.currentLocation2) {
        element = 
        <div>
          <Player
              key={this.state.staff[1].id}
              name={this.state.staff[1].name}
              occupation={this.state.staff[1].occupation}
              id={this.state.staff[1].id}
              currentLocation2={this.state.currentLocation2}
          />
        </div>
        
      } else {
        element = null;
      }
    }
        return (

    <div className="cities">
      <ul className="city-list">
      {this.props.cities.map(item => (
        <li className="list-group-item" key={item.id}>
        <City
          id={item.id}
          name={item.location}
          connections={item.connections}
          person1LocationId={this.state.currentLocation1}
          person2LocationId={this.state.currentLocation2}
          cityId={random}
          cityMatches={this.cityMatches(item.id)}
          moveLocation1={this.moveLocation1}
          moveLocation2={this.moveLocation2}
          increaseCount={this.increaseCount}
          refresh={this.state.refresh}
        />
        {element}
        </li>
      ))}
    </ul>
    </div>
  )}
};
  
  export default CityList;