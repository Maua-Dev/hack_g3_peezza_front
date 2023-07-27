import React from "react";
import "./DeleteOption.css";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AddOption({showAddOption, setShowAddOption, attributes}) {

  function renderInputs () {
    return (
      <div className="InputContainer">
        {attributes.map((attribute, index) => (
          <div key={index} className="Input">
            <label>{attribute}</label>
            <input type="text" />
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className={"TableInputOptions"}> 
      {renderInputs()}
      <button onClick={() => setShowAddOption(!showAddOption)} id="cancel"><ImCancelCircle/></button>
      <button id="save"><AiOutlineCheckCircle/></button>
    </div>
  );
}
