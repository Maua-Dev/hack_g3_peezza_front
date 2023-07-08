import React, { useState } from "react";
import "./Options.css";
import pixImg from "./pix.png";
import cartaocredImg from "./cartaocred.png";
import cartaodebImg from "./cartaodeb.png";

export const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Options">
      <div
        className={`Option ${selectedOption === "pix" ? "selected" : ""}`}
        onClick={() => handleOptionClick("pix")}
      >
        <div className="ButtonContainer">
          <img src={pixImg} alt="Pix" />
          <div className="Description">Pix</div>
        </div>
      </div>
      <div
        className={`Option ${selectedOption === "cartaocredito" ? "selected" : ""}`}
        onClick={() => handleOptionClick("cartaocredito")}
      >
        <div className="ButtonContainer">
          <img src={cartaocredImg} alt="Cartão de Crédito" />
          <div className="Description">Cartão de Crédito</div>
        </div>
      </div>
      <div
        className={`Option ${selectedOption === "cartaodebito" ? "selected" : ""}`}
        onClick={() => handleOptionClick("cartaodebito")}
      >
        <div className="ButtonContainer">
          <img src={cartaodebImg} alt="Cartão de Débito" />
          <div className="Description">Cartão de Débito</div>
        </div>
      </div>
    </div>
  );
};