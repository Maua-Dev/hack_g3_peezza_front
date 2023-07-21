import React from "react";
import './Utils.css';
import Table from "./Table/Table";
import {BiErrorCircle} from "react-icons/bi";
export default function RightBox ({selectedOption}) {
  
  function handleShowBox(selectedOption) {
      return (
      <>
        {selectedOption ? (
          <>
            <div className="tittlebox">
              <h2>{selectedOption}</h2>
            </div>
            <Table selectedOption={selectedOption} />
          </>
        ) : (
          <>
            <div className="ErrorBox">
              <BiErrorCircle id="iconError"></BiErrorCircle>
              <h1>SELECIONE UMA OPÇÃO</h1>
            </div>
          </>    
        )}
      </>
    );
  }

  return(
    <div className="RightBox">
      <div className="ScreenBox">
        {handleShowBox(selectedOption)}
      </div>
    </div>
  );
}