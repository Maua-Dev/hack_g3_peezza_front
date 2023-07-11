import React from "react";
import './BackToPayment.css';
import { Link } from "react-router-dom";

export const BackToPayment = () => {
  return (
    <Link to={"/pagamento"} className="link">
      <div className="BackToPayment">
        <header>Voltar</header>
      </div>
    </Link>
    
  );
};
