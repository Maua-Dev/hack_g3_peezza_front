import React, { useState } from "react";
import "./AlterOption.css";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import InputMask from "react-input-mask";
import { updateItem } from "../../../../../../../back_operation_mock/repo_mock";

export default function AlterOption({ selectedOption, setShowAlterOption, attributes, data }) {
  const [idToAlter, setIdToAlter] = useState("");
  const [itemToAlter, setItemToAlter] = useState(null);

  function renderInputs() {
    if (!itemToAlter) return null;

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
                    value={itemToAlter[attribute]}
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  />
                ) : attribute === "CPF" ? (
                  <InputMask 
                    mask="999.999.999-99" 
                    value={itemToAlter[attribute]}
                    id="CPF" 
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  />
                ) : attribute ===  "Contato" ? (
                  <InputMask 
                    mask="(99) 99999-9999"
                    value={itemToAlter[attribute]}
                    id="Contato"
                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                  />
                ):(
                  <input
                    type="text"
                    value={itemToAlter[attribute]}
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
  

  function handleInputChange(attribute, value) {
    setItemToAlter((prevItem) => ({ ...prevItem, [attribute]: value }));
  }

  function handleIdInputChange(e) {
    setIdToAlter(e.target.value);
  }

  function handleAlterButtonClick() {
    const item = data.find((item) => item['ID'] === parseInt(idToAlter, 10));
    if (item) {
      setItemToAlter(item);
    } else {
      alert("Item com o ID informado não encontrado!");
    }
  }

  function handleSaveButtonClick() {
    console.log("Modified item:", itemToAlter);
    updateItem(selectedOption, itemToAlter);
    setShowAlterOption(false);
  }

  return (
    <div className={"TableInputOptions"}>
      <input
        type="number"
        value={idToAlter}
        onChange={handleIdInputChange}
        placeholder="Enter ID to alter"
      />
      <button onClick={handleAlterButtonClick}>Alter</button>
      {renderInputs()}
      <button onClick={() => setShowAlterOption(false)} id="cancel">
        <ImCancelCircle />
      </button>
      <button onClick={handleSaveButtonClick} id="save">
        <AiOutlineCheckCircle />
      </button>
    </div>
  );
}
