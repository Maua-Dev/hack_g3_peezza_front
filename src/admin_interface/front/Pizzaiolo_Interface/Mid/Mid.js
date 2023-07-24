import React from 'react';
import './Mid.css';

export default function MidScreen({orders}) {
  
  function ShowOrders () {
    return orders.map((item) => (
      <div className='Box' key={item.id}>
        <h2>{item.id}</h2>
        <ul>
          {item.order.map((orderItem, index) => (
            <li key={index}>
              {orderItem.item} : {orderItem.quantity}
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