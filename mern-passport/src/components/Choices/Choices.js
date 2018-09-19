import React from "react";
import City from "../City";
// import "./FriendCard.css";

const Choices = props => (

    <div className="choices">
        <h5>Where do you want to go next?</h5>
        {props.locationOptions.map(place => (
            <button onClick={() => props.moveLocation(place)}><City name={place} /></button>
        ))}
 
    </div>

);

export default Choices;