import React from "react";
import "./Bottom.css";
//import { valortotal } from "../client_interface/front/Home/Bottom/Bottom.js";
export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="Pagar">
        <h2>Total: R$ </h2>
        <button className="PayButton">Pagar</button>
      </div>
    </div>
  );
};
//R$ {valorTotal.toFixed(2)}