import React from "react";


class City extends React.Component {
    constructor(props){
        super(props)
        
    this.state = {
        infectionRate: 0
    }
    }

    componentDidMount() {
        console.log(this.props);
    }
    increaseInfectionLevel = () => {
        const infectionRate = this.state.infectionRate+1;
        this.setState({ infectionRate: infectionRate })
    }

    heal = () => {
        const infectionRate = this.state.infectionRate-1;
        this.setState({ infectionRate: infectionRate })
    }

    render() {
        return (
    
    <div className="city">

        <h6>{this.props.name}</h6>
        <h6>{this.props.infectionLevel}</h6>
        <button onClick={() => this.increaseInfectionLevel()}>Increase Infection</button>
        <button onClick={() => this.heal()}>Heal Zombies</button>
        {this.props.connections}
   
    </div>

)}};

export default City;