import React from "react";
import './MidRetirada.css';
import { BackToPayment } from "./BackToPayment/BackToPayment";
import gifImage from './Loading.gif';

const nome = localStorage.getItem('nome');
export const Mid = () => {
    return (
      <div className="mid_p">
         <BackToPayment /> 
         <div className="pedido">
          <h1>{nome} seu pedido foi enviado:</h1>
          </div>
            <div>
              <img src={gifImage} alt="Loading..." />
            </div>
      </div>
    );
}