import React from "react";
import './PayButton.css';
import { Link } from "react-router-dom";

export const PayButtom = () => {
  return (
    <Link to={"/retirada"}>
        <div className="PayButton">
            <header>Pagar</header>
        </div>
    </Link>
  );
};
