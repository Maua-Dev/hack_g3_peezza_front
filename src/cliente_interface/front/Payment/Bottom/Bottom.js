import React from "react";
import "./Bottom.css";
import { IoWalletOutline } from "react-icons/io5";
import { PayButtom } from "./PayButtom/PayButtom";

const valorTotal = localStorage.getItem('valorTotal');
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
