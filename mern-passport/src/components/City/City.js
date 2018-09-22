import React from "react";

function randomInfection() {
    return Math.floor(Math.random() * 3) + 1;
}

let infectionLevel = randomInfection();

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

    componentWillReceiveProps(props) {
        const refresh = this.props.refresh;
        if (props.refresh !== refresh) {
            this.increaseInfectionLevel(this.props.cityId);
        }
        console.log(refresh, props.refresh);
    }

    increaseInfectionLevel = (idarr) => {
        for(let i=0; i<idarr.length;i++) {
            if (idarr[i] === this.props.id) {
                const infectionRate = this.state.infectionRate+infectionLevel;
                this.setState({ infectionRate: infectionRate })}
        }
        infectionLevel = randomInfection();
    }

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
        {this.state.infectionRate > 0 && (this.props.id===this.props.person1LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
          Cure Zombies
        </button>}
        {this.state.infectionRate > 0 && (this.props.id===this.props.person2LocationId) &&
        <button onClick={(event) => { this.heal(this.props.id); this.props.increaseCount();}}>
            Cure Zombies
        </button>
        }
        {(this.props.id===this.props.person1LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation1(place)}> {place} </button>
        ))}</div></div>
      }
        {(this.props.id===this.props.person2LocationId) &&
        <div><h5>Where do you want to go next?</h5>
        <div>{this.props.connections.map((place) => (
            <button key={place.toString()} onClick={() => this.props.moveLocation2(place)}> {place} </button>
        ))}</div></div>
      }
   
    </div>

)}};

export default City;