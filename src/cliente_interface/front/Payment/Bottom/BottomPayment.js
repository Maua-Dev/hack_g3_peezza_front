import React, { useState } from "react";
import "./BottomPayment.css";
import { IoWalletOutline } from "react-icons/io5";
import { PayButton } from "./PayButton/PayButton";

export function Bottom ({ continues, selectedOption }) {

  const valorTotal = parseFloat(localStorage.getItem('valorTotal')).toFixed(2);

  return (
    <div className="BottomPayment">
      <div className="box">
        <label id="valortotal">R${valorTotal}</label>
        <label><IoWalletOutline id="icon"/></label>
      </div>
      <PayButton continues={ continues } selectedOption={selectedOption} />
    </div>
  );
};
