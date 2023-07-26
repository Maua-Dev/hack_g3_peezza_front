import React from "react";
import './BackButton.css';
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to={"/"} className="link">
      <div className="BackButton">
        <header>Voltar</header>
      </div>
    </Link>
    
  );
};
