import React, { Component } from 'react';
import Sound from 'react-sound';

import IntroAudio from './intro.mp3';
import Background1Audio from './background1.mp3';
import VirusAudio from './testAudio.mp3';
import OutbreakAudio from './testAudio.mp3';

class SoundComponent extends Component {

    state = {
        sound: null
    }

    componentDidMount() {
        switch(this.props.sound) {
            case "intro":
                this.setState({
                    sound: IntroAudio
                })
            case "background1":
                this.setState({
                    sound: Background1Audio
                })
            case "virus":
                this.setState({
                    sound: VirusAudio
                })
            case "outbreak":
                this.setState({
                    sound: OutbreakAudio
                })
            // case "found item":
            //     this.setState({
            //         sound: fuondiet;wlekta
            //     })
            default:
                
            
        }
    }

    render() {
        
        return (
            <div>
                {this.state.sound &&
                    <Sound
                        url={this.state.sound} 
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={0}
                    />
                }
            </div>
        )
    }
}

export default SoundComponent;