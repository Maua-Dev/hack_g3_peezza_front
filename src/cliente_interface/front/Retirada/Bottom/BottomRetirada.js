import React from "react";
import "./BottomRetirada.css";
import { Link } from "react-router-dom";

export const Bottom = ({ isButtonEnabled }) => {
  
  function setNullLocalStorage() {
    localStorage.setItem("order", null);
  }

  return (
    <div className="Bottom">
      <Link to={"/client/feedback/"} className="Link">
        <button className="ConfirmButton" onClick={setNullLocalStorage} disabled={!isButtonEnabled}>
          Confirme a retirada
        </button>
      </Link>
    </div>
  );
};