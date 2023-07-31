import React from "react";
import "./BottomRetirada.css";
import { Link } from "react-router-dom";

export const Bottom = ({ status }) => {
  
  const isButtonEnabled = status === "Pronto";
  console.log(status);
  return (
    <div className="Bottom">
      <Link to={"/client/feedback/"} className= 'Link'>
        <button className="ConfirmButton" disabled={!isButtonEnabled}>Confirme a retirada</button>
      </Link>
    </div>
  );
};
