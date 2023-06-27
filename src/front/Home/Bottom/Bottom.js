import React from "react";
import "./Bottom.css";

export const Bottom = () => {
    return (
     <div className="box">
      <div className="bottom-wrapper">
        <div className="bottom">
         <h1 className="text-wrapper">Carrinho</h1>
        <img className="primary" alt="Primary" src="primary.svg" />
        <div className="div">R$00,00</div>
       </div>
     </div>
     </div>
    );
};
