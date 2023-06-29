import React from "react";
import './Mid.css';
import { BackButton } from "./BackButton/BackButton";

export const Mid = () => {
    return(
      <div className="mid">
        <BackButton></BackButton>
        <div className="box">
            <h1>Métodos de Pagamento:</h1>
        </div>
      </div>
    );
}