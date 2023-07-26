import React from "react";
import './MidRetirada.css';
import gifImage from './Loading.gif';

export const Mid = () => {
  
  const nome = localStorage.getItem('nome');

  return (
    <div className="mid_p">
      <div className="pedido">
        <h1>{nome} seu pedido foi enviado:</h1>
      </div>
      <div>
        <img src={gifImage} alt="Loading..." />
        <div className="status">
          <span>Status:</span>
          <div className="line"></div>
        </div>
          <span className="centered">[Status]</span>       
      </div>
    </div>
  );
}
