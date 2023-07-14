import React from "react";
import Clock from "./Clock";
import './Bottom.css';

export default function BottomScreen({team}) {
  
  const showTeam = (team) => {
    return team.map((Member) => (
      <label>{Member.nome}</label>
    ));
  };

  return(
    <div className='BottomScreen'>
      <Clock />
      <div className='EquipeBox'>
        <h1>Equipe</h1>
        {showTeam(team)}
      </div>
    </div>
  );
}
