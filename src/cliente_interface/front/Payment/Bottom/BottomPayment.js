import React from "react";
import "./BottomPayment.css";
import { IoWalletOutline } from "react-icons/io5";
import { PayButtom } from "./PayButtom/PayButtom";


const valorTotal = parseFloat(localStorage.getItem('valorTotal')).toFixed(2);

export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="Pagar">
        <h2>R${valorTotal}</h2>
        <h3><IoWalletOutline/></h3>
        <PayButtom></PayButtom>
      </div>
    </div>
  );
};
