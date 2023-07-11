import React from "react";
import "./Bottom.css";




export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="customCheckBoxHolder">
      <input type="checkbox" id="cCB1" className="customCheckBoxInput" />
      <label htmlFor="cCB1" className="customCheckBoxWrapper">
        <div className="customCheckBox">
          <div className="inner">Confirme a retirada</div>
        </div>
      </label>
    </div>
    </div>
  );
};
