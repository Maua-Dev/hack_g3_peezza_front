import React, { useState } from 'react';
import './Pizzaiolo.css';
import Clock from './Clock';

export default function Pizzaiolo() {
  
  const [pedidos, setPedidos] = useState([]);
  const [team, setTeam] = useState([{'nome':'Felipe'},{'nome':'Carlos'}]);
  
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
  }


  return (
    <div className="Pizzaiolo">
      <div className='TopScreen'>
        {Group("Número Pedidos:",pedidos.length)}
        {Group("Pedidos Abertos:",pedidos.length)}
        {Group("Pedidos Concluídos:",pedidos.length)}
      </div>
      <div className='MidScreen'> 

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