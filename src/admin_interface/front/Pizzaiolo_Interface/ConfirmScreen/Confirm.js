import React from "react";
import './Confirm.css';



export default function ConfirmScreen({useInput, isScreenOpen, orders, setOrders}) {  

  const handleConfirm = (event) => {
    let orders = [];
    let newOrders = [];
    if (event.key === 'Enter') {
      const data = localStorage.getItem('Pedidos');
      const parsedData = JSON.parse(data);
      orders = parsedData.tuples;
      const orderId = document.getElementById('idInput').value;  
      newOrders = orders.map((item) => {
        if (parseInt(item['id']) === parseInt(orderId)) {
          item['status'] = 'Pronto';
        }
        ;
      });
      
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
