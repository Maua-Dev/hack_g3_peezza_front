import React from "react";
import './MidPayment.css';
import { BackButton } from "./BackButton/BackButton";
import { Options } from "./Options/Options";

export const Mid = () => {
    return (
      <div className="mid">
        <BackButton></BackButton>
        <div className="metodos">
          <h1>Métodos de Pagamento:</h1>
          <div className="options-container">
            <Options />
          </div>
        </div>
      </div>
    );
}