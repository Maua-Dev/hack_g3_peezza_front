import React from "react";
import './Confirm.css';
import { updateItem } from "../../../../back_operation_mock/repo_mock";

export default function ConfirmScreen({ useInput, isScreenOpen, orders, closedOrders, setClosedOrders, setNumberOrders }) {

  const handleConfirm = (event) => {
    if (event.key === 'Enter') {
      try {
      const idInput = useInput.current.value;
      const indexItem = orders.findIndex((item) => parseInt(item['ID']) === parseInt(idInput));
      orders[indexItem].status = "Pronto";
      updateItem("Pedidos", orders[indexItem]);
      setClosedOrders(closedOrders + 1);
      } catch (error) {
        alert("ID inválido.");  
      };
    };
  } 

  return (
    <div>
      {isScreenOpen && (
        <div className="ConfirmBox" onKeyDown={handleConfirm}>
          <h1>Concluir Pedido:</h1>
          <input type='number' id='idInput' placeholder='ID' ref={useInput}></input>
        </div>
      )}
    </div>
  );
}