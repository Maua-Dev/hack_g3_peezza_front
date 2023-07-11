import React, { useRef, useState, useEffect } from 'react';
import './Pizzaiolo.css';
import Clock from './Clock';

export default function Pizzaiolo() {

  const orders = [
    {
      "id": 12,
      "order": [
        { "item": "Mussarela", "quantity": 2 },
        { "item": "Pepperoni", "quantity": 1 }
      ],
      "done": 0
    }
    ,
    {
      "id": 13,
      "order": [
        { "item": "Mussarela", "quantity": 2 },
        { "item": "Pepperoni", "quantity": 1 }
      ],
      "done": 0
    }
    ,
    {
      "id": 14,
      "order": [
        { "item": "Mussarela", "quantity": 2 },
        { "item": "Pepperoni", "quantity": 1 }
      ],
      "done": 0
    }
  ];

  const [team, setTeam] = useState([{ 'nome': 'Felipe' }, { 'nome': 'Carlos' }]);
  const [visibleOrders, setVisibleOrders] = useState(orders.slice(0, 9));

  function ShowOrders ({ orders }) {
    return visibleOrders.map((item) => (
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

  const showTeam = (team) => {
    return team.map((Member) => (
      <label>{Member.nome}</label>
    ));
  };

  const [isScreenOpen, setIsScreenOpen] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsScreenOpen(true);
    } else if (event.key === 'Escape') {
      setIsScreenOpen(false)
    }
  };

  function OperationScrn () {
    const useInput = useRef(null);

    useEffect(() => {
      if (isScreenOpen) {
        useInput.current.focus();
      }
    }, [isScreenOpen]);

    const handleConfirm = (event) => {
      if (event.key === 'Enter') {
        setVisibleOrders([])
      }
    };

    return (
      <div>
        {isScreenOpen && (
          <div className="ConfirmBox" onKeyDown={handleConfirm}>
            <h1>Concluir Pedido:</h1>
            <input type='number' placeholder='ID' ref={useInput}></input>
          </div>
        )}
      </div>
    );
  };

  const focusScreen = useRef(null);

  useEffect(() => {
      focusScreen.current.focus();
  }, [isScreenOpen]);

  return (
    <div className="Pizzaiolo" onKeyDown={handleKeyPress} tabIndex={0} ref={focusScreen}>
      <OperationScrn></OperationScrn>
      <div className='TopScreen'>
        {Group("Número Pedidos:", orders.length)}
        {Group("Pedidos Abertos:", orders.length)}
        {Group("Pedidos Concluídos:", orders.length)}
      </div>
      <div className='MidScreen'>
        <ShowOrders orders={orders} />
      </div>
      <div className='BottomScreen'>
        <Clock />
        <div className='EquipeBox'>
          <h1>Equipe</h1>
          {showTeam(team)}
        </div>
      </div>
    </div>
  );
}