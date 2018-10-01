import React from "react";
import "./Modal.css";
import Sound from 'react-sound';
//import Card from "../Card";
  
const Modal = ({ show, modalText }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}> 
        <section className='card'>  
        <Sound 
        url= {Audio.name}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
         <h3>{modalText}</h3>
        </section>
      </div>
    );
  };

export default Modal;