import React, { useState } from "react";
import "./AddOption.css";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { addItemToCardapio } from "../../../../../../../back_operation_mock/cardapio_mock/repo_mock";
export default function AddOption({ selectedOption, setShowAddOption, attributes }) {
  
  const [inputValues, setInputValues] = useState({});

  function handleInputChange(attribute, value) {
    setInputValues((prevInputValues) => ({ ...prevInputValues, [attribute]: value }));
  }

  function handleSaveButtonClick() {
    const newItem = { ...inputValues };
    addItemToCardapio(newItem);
    setShowAddOption(false);
  }

  function renderInputs() {
    return (
      <div className="InputContainer">
        {attributes.map((attribute, index) => (
          <div key={index} className="Input">
            <label>{attribute}</label>
            <input
              type="text"
              value={inputValues[attribute] || ""}
              onChange={(e) => handleInputChange(attribute, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={"TableInputOptions"}>
      {renderInputs()}
      <button onClick={() => setShowAddOption(false)} id="cancel">
        <ImCancelCircle />
      </button>
      <button onClick={handleSaveButtonClick} id="save">
        <AiOutlineCheckCircle />
      </button>
    </div>
  );
}
