import React from "react";
//import Choices from "../Choices";

class Player extends React.Component {

  // constructor(props){
  //   super(props)

  // // state = {
  // //    currentLocation: this.props.startingCityId
  // // }
  // }

  render() {

    //if (this.props.current===this.state.currentLocation) 
      return (
  
  <div className="player">

      <h6>{this.props.name}</h6>
      <h6><strong>Occupation:</strong> {this.props.occupation}</h6>
      {/* <h6>Current Location: {this.props.currentLocation}</h6> */}
 
  </div>

)}};

export default Player;
