import React from "react";
import "./Bottom.css";
import { IoWalletOutline } from "react-icons/io5";


const valorTotal = localStorage.getItem('valorTotal');
export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="Pagar">
        <h2>R${valorTotal}</h2>
        <h3><IoWalletOutline/></h3>
        <button className="PayButton">Pagar</button>
      </div>
    </div>
  );
};
