import React from 'react';
import './Top.css';

export default function TopScreen({orders}){
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
    {Group("Número Pedidos:", orders.length)}
    {Group("Pedidos Abertos:", orders.length)}
    {Group("Pedidos Concluídos:", orders.length)}
  </div>
  );
}