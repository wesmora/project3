import React from "react";

class City extends React.Component {
    constructor(props){
        super(props)
        
    this.state = {
        infectionRate: 0
    }
}

    componentDidMount() {
        this.increaseInfectionLevel(this.props.cityId);
    }

    increaseInfectionLevel = (id) => {
        if (id === this.props.id) {
        const infectionRate = this.state.infectionRate+2;
        this.setState({ infectionRate: infectionRate })
    }}

    heal = (id) => {
        if (id===this.props.id) {
        const infectionRate = this.state.infectionRate-1;
        this.setState({ infectionRate: infectionRate })
    }}

    render() {
        return (
    
    <div className="city">

        <h6>{this.props.name}</h6>
        <h6>{this.state.infectionRate}</h6>
        {this.state.infectionRate > 0 && (this.props.id===this.props.personLocationId) &&
        <button onClick={() => this.heal(this.props.id)}>
          Cure Zombies
        </button>
        }
        {(this.props.id===this.props.personLocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map(place => (
            <button onClick={() => this.props.moveLocation(place)}> {place} </button>
        ))}</div></div>
      }
   
    </div>

)}};

export default City;