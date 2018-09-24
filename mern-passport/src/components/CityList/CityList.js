import React from "react";
import City from "../City";
import Player from "../Player";
import staff from "../../players.json";
import cities from "../../cities.json";

function findRandom() {
  var arr = []
  while(arr.length < 3){
      var randomnumber = Math.floor(Math.random()*25) + 1;
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
let outbreakCount=0;

class CityList extends React.Component {
       
  constructor(props){
      super(props)
        this.state = {
          staff,
          refresh: false,
          currentLocation1: 3, 
          currentLocation2: 8,
          currentLocation3: 12,
          currentLocation4: 18,
          currentLocation5: 22
        }
    }

    moveLocation1 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.sampleCityId) {
        this.props.foundSample();
      }
      if (newCity===1 && this.props.sample) {
        this.props.mission1();
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
        this.props.foundProtein();
      }
      if (newCity===1 && this.props.protein) {
        this.props.mission2();
      }
      this.setState({ currentLocation2: newCity });
      this.increaseCount();
    }

    moveLocation3 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.scientistCityId) {
        this.props.foundScientist();
      }
      if (newCity===1 && this.props.scientist) {
        this.props.mission3();
      }
      this.setState({ currentLocation3: newCity });
      this.increaseCount();
    }

    moveLocation4 = cityName => {
      const newCity = findId(cityName);
      if (newCity===this.props.immuneManCityId) {
        this.props.foundImmuneMan();
      }
      if (newCity===1 && this.props.immuneMan) {
        this.props.mission4();
      }
      this.setState({ currentLocation4: newCity });
      this.increaseCount();
    }

    moveLocation5 = cityName => {
      const newCity = findId(cityName);
      this.setState({ currentLocation5: newCity });
      this.increaseCount();
    }

    outbreak = () => {
      outbreakCount++;
      console.log(outbreakCount);
      alert("You've had an outbreak " + outbreakCount + " times.")
      if (outbreakCount > 7) {
        this.props.loseGame();
      }
  }

    render() {
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
          person3LocationId={this.state.currentLocation3}
          person4LocationId={this.state.currentLocation4}
          person5LocationId={this.state.currentLocation5}
          cityId={random}
          moveLocation1={this.moveLocation1}
          moveLocation2={this.moveLocation2}
          moveLocation3={this.moveLocation3}
          moveLocation4={this.moveLocation4}
          moveLocation5={this.moveLocation5}
          increaseCount={this.increaseCount}
          refresh={this.state.refresh}
          outbreak={this.outbreak}
        />
        {item.id===this.state.currentLocation1 &&
        <div>
          <Player
              key={this.state.staff[0].id}
              name={this.state.staff[0].name}
              occupation={this.state.staff[0].occupation}
              id={this.state.staff[0].id}
              currentLocation1={this.state.currentLocation1}
          />
        </div>}
        {item.id===this.state.currentLocation2 &&
        <div>
          <Player
                key={this.state.staff[1].id}
                name={this.state.staff[1].name}
                occupation={this.state.staff[1].occupation}
                id={this.state.staff[1].id}
                currentLocation2={this.state.currentLocation2}
          />
        </div>}
        {item.id===this.state.currentLocation3 &&
        <div>
          <Player
                key={this.state.staff[2].id}
                name={this.state.staff[2].name}
                occupation={this.state.staff[2].occupation}
                id={this.state.staff[2].id}
                currentLocation3={this.state.currentLocation3}
          />
        </div>}
        {item.id===this.state.currentLocation4 &&
        <div>
          <Player
                key={this.state.staff[3].id}
                name={this.state.staff[3].name}
                occupation={this.state.staff[3].occupation}
                id={this.state.staff[3].id}
                currentLocation4={this.state.currentLocation4}
          />
        </div>}
        {item.id===this.state.currentLocation5 &&
        <div className="inLine">
          <Player
                key={this.state.staff[4].id}
                name={this.state.staff[4].name}
                occupation={this.state.staff[4].occupation}
                id={this.state.staff[4].id}
                currentLocation5={this.state.currentLocation5}
          />
        </div>}
        </li>
      ))}
    </ul>
    </div>
  )}
};
  
  export default CityList;