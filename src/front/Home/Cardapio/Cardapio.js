import React from "react";
import "./Cardapio.css";

export const Cardapio = () => {
  return (
    <div className="box">
    <div className="cardapio-wrapper">
    <div className="cardapio">
    <div className="pizza-box">
    <img className="line" alt="Line" src="image.svg" />
    <h1 className="text-wrapper">Sobremesas</h1>
    </div>
    <div className="div">
    <img className="img" alt="Line" src="line-1-2.svg" />
    <div className="text-wrapper-2">Bebidas</div>
    </div>
    <div className="pizza-box-2">
    <img className="line-2" alt="Line" src="line-1.svg" />
    <div className="text-wrapper-3">Pizzas</div>
    </div>
    </div>
    </div>
    </div>
    );
    };