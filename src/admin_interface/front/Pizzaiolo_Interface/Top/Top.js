import React from 'react';
import './Top.css';

export default function TopScreen({ orders, closedOrders, numberOrders }){
  const Group = (text, variable) => {
    return (
      <div className='Group'>
        <label>{text}</label>
        <div className='BoxTittle'>
          <label>{variable}</label>
        </div>
      </div>
     );
   };

  return (
  <div className='TopScreen'>
    {Group("Número Pedidos:", numberOrders)}
    {Group("Pedidos Abertos:", orders.length)}
    {Group("Pedidos Concluídos:", closedOrders)}
  </div>
  );
}