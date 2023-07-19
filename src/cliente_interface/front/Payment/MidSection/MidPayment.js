import React from "react";
import './MidPayment.css';
import { BackButton } from "./BackButton/BackButton";
import { Options } from "./Options/Options";

export const Mid = ({setContinues, selectedOption, setSelectedOption}) => {
    return (
      <div className="mid">
        <BackButton></BackButton>
        <div className="metodos">
          <h1>Métodos de Pagamento:</h1>
          <div className="options-container">
            <Options setContinues={setContinues} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
        </div>
      </div>
    );
}