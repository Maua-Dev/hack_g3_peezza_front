import React from 'react';
import './Mid.css';

export default function MidScreen({orders}) {
  
  function ShowOrders() {
    if (!orders || !orders.orders || orders.orders.length === 0) {
      return <div>Nenhum pedido encontrado.</div>;
    }
  
    return orders.orders.map((item) => (
      <div className='Box' key={item['ID']}>
        <h2>{item['ID']} - {item.Nome}</h2>
        <ul>
          {item.cart.map((orderItem, index) => (
            <li key={index}>
              {orderItem.Item} : {orderItem.quantidade}
            </li>
          ))}
        </ul>
      </div>
    ));
  };
  

  return (
    <div className='MidScreen'>
      <ShowOrders />
    </div>
  );
}