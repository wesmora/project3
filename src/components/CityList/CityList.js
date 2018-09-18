import React from "react";
import City from "../City";

const CityList = props => (

    <div className="cities">
      <ul className="city-list">
      {props.cities.map(item => (
        <li className="list-group-item">
        <City
          key={item.id}
          name={item.location}
          connections={item.connections}
          infectionId={this.findId}
          increaseInfectionLevel={this.increaseInfectionLevel}
          heal={this.heal}
          infectionLevel={props.infectionLevel}
        />
        </li>
      ))}
    </ul>
    
    </div>
  );
  
  export default CityList;