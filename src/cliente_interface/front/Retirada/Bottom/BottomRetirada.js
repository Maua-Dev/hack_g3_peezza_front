import React, { useEffect } from "react";
import "./BottomRetirada.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Bottom = ({ isButtonEnabled }) => {
   
  const [status, setStatus] = useState(false);
  useEffect(() => {
  if (isButtonEnabled === "Pronto") {
    setStatus(true);
    console.log(isButtonEnabled);
  }
  }, [setStatus,isButtonEnabled]);

  return (
    <div className="Bottom">
      <Link to={"/client/feedback/"} className="Link">
        {}
        <button className="ConfirmButton" disabled={!status}>
          Confirme a retirada
        </button>
      </Link>
    </div>
  );
};
