import React from "react";
import "./BottomRetirada.css";
import { Link } from "react-router-dom";

export const Bottom = () => {
  return (
    <div className="Bottom">
      <Link to={"/client/feedback/"} className= 'Link'>
      <button className="ConfirmButton">Confirme a retirada</button>
      </Link>
    </div>
  );
};
