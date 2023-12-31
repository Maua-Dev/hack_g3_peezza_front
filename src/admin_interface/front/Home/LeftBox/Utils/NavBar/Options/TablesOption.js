import React from 'react';
import './TablesOption.css';

export function TablesOptions({ handleOptionClick }) {
  return (
    <>
      <div className='tables-options' onClick={() => handleOptionClick('Pedidos')}>
        <h4>Pedidos</h4>
      </div>
      <div className='tables-options' onClick={() => handleOptionClick('Funcionario')}>
        <h4>Funcionário</h4>
      </div>
      <div className='tables-options' onClick={() => handleOptionClick('Cardapio')}>
        <h4>Cardápio</h4>
      </div>
    </>
  );
}

