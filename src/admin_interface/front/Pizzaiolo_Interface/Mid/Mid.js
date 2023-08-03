import React from 'react';
import './Mid.css';
import { RiAlarmWarningLine } from 'react-icons/ri';

export default function MidScreen({orders}) {
  
  function ShowOrders() {
    if (!orders || orders.length === 0) {
      return(
        <div id="warning">
          Nenhum pedido encontrado.
          <RiAlarmWarningLine id='icon' />
        </div>
      ); 
    }
  
    return orders.map((item) => (
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