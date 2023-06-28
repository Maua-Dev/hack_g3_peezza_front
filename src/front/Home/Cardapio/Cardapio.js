import React from "react";
import "./Cardapio.css";
import { showItens, createNewCtgr } from "./Utils"

export const Cardapio = ({ pizza, bebida, sobremesa, handleItemClick, clickedItem }) => {
  return (
    <div className='Cardapio'>
      {createNewCtgr('Pizza',pizza, handleItemClick, clickedItem, showItens)}
      {createNewCtgr('Bebidas',bebida, handleItemClick, clickedItem, showItens)}
      {createNewCtgr('Sobremesas',sobremesa, handleItemClick, clickedItem, showItens)}
    </div>
  );
};
