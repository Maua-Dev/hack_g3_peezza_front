import React, { useEffect } from "react";
import "./BottomRetirada.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Bottom = ({ isButtonEnabled }) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (isButtonEnabled === "Pronto") {
      setStatus(true);
    }
  }, [isButtonEnabled]);

  // Função para limpar o localStorage de "order"
  function clearOrder() {
    localStorage.removeItem("order");
  }

  return (
    <div className="Bottom">
      <Link to={"/client/feedback/"} className="Link">
        <button className="ConfirmButton" disabled={!status} onClick={clearOrder}>
          Confirme a retirada
        </button>
      </Link>
    </div>
  );
};
