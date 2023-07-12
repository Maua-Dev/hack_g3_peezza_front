import React from "react";
import "./BottomPayment.css";
import { IoWalletOutline } from "react-icons/io5";
import { PayButton } from "./PayButton/PayButton";


const valorTotal = parseFloat(localStorage.getItem('valorTotal')).toFixed(2);

export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="Pagar">
        <h2>R${valorTotal}</h2>
        <h3><IoWalletOutline/></h3>
        <PayButton></PayButton>
      </div>
    </div>
  );
};
