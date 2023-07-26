import React, {useEffect, useRef} from "react";
import './Confirm.css';



export default function ConfirmScreen({useInput, isScreenOpen, orders,setOrders}) {  

  const handleConfirm = (event) => {
    if (event.key === 'Enter') {
      const orderId = document.getElementById('idInput').value;  
      const newOrders = orders.filter((order) => order.id !== orderId);
      setOrders(newOrders);
    }
  };  

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
};
