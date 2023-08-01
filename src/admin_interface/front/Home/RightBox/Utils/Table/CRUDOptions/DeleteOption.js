import React from "react";
import "./DeleteOption.css";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { deleteItem } from "../../../../../../../back_operation_mock/repo_mock";

export default function DeleteOption({ selectedOption, setShowDeleteOption}) {

  function handleSaveButtonClick() {
    const itemId = document.getElementById("ID").value;
    console.log(itemId)
    deleteItem(selectedOption, itemId);
    setShowDeleteOption(false);
  }
  
  return (
    <div className={"TableInputOptions"}> 
       <div className="InputContainer">
        <input id="ID" type="number" placeholder="ID"/>
       </div>
      <button onClick={() => setShowDeleteOption(false)} id="cancel"><ImCancelCircle/></button>
      <button id="save" onClick={() => handleSaveButtonClick()}><AiOutlineCheckCircle/></button>
    </div>
  );
}
