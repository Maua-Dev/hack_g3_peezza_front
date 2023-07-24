import React, { useState, useEffect } from "react";
import "./Options.css";
import pix from "./pix.png";
import cartaocredito from "./cartaocred.png";
import cartaodebito from "./cartaodeb.png";

export const Options = ({ setContinues, selectedOption, setSelectedOption }) => {

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption) {
      setContinues(true);
    }
  }, [selectedOption, setContinues]);

  function renderOption(Option, NameOption, img) {
    return (
      <div
        className={`Option ${selectedOption === Option ? "selected shine-green" : ""}`}
        onClick={() => handleOptionClick(Option)}
      >
        <div className={Option}>
          <img src={img} alt={"Imagem " + NameOption} />
          <div className="Description">{NameOption}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderOption("pix","Pix",pix)}
      {renderOption("cartaocredito","Cartão de Crédito",cartaocredito)}
      {renderOption("cartaodebito","Cartão de Débito",cartaodebito)}
    </>
  );
};