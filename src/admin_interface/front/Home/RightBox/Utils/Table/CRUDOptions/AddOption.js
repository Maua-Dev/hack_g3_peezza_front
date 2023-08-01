import React, { useState } from "react";
import "./AddOption.css";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { addItem } from "../../../../../../../back_operation_mock/repo_mock";
export default function AddOption({ selectedOption, setShowAddOption, attributes }) {

  const [inputValues, setInputValues] = useState({});

  function handleInputChange(attribute, value) {
    setInputValues((prevInputValues) => ({ ...prevInputValues, [attribute]: value }));
  }

  function handleSaveButtonClick() {
    const newItem = { ...inputValues };
    addItem(selectedOption, newItem);
    setShowAddOption(false);
  }

  function renderInputs() {
    return (
      <div className="InputContainer">
        {attributes.map((attribute, index) => (
          <div key={index} className="Input">
            {attribute === "ID" ? (
              <></>
            ) : (
              <>
                <label>{attribute}</label>
                {attribute === "Preço" ? (
                  <input
                    type="number"
                    value={inputValues[attribute] || ""}
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  />
                ) : attribute === "Categoria" ? (
                  <select
                    id="category"
                    value={inputValues[attribute] || ""}
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  >
                    <option value="Pizza">Pizza</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Sobremesa">Sobremesa</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    value={inputValues[attribute] || ""}
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  />
                )}
              </>
            )}
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
      <button onClick={() => handleSaveButtonClick()} id="save">
        <AiOutlineCheckCircle />
      </button>
    </div>
  );
}
