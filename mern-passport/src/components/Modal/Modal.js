import React from "react";
import "./Modal.css";
import SoundComponent from '../SoundComponent';
//import Card from "../Card";
  
const Modal = ({ show, modalText, audio }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
      <div className={showHideClassName}> 
        <section className='card'>  
        <SoundComponent
          sound={audio}
        />
         <h3>{modalText}</h3>
        </section>
      </div>
    );
  };

export default Modal;