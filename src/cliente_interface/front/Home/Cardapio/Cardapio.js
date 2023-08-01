import React from "react";
import "./Cardapio.css";
import { createNewCtgr, ItemBoxSlctd } from "./Utils"
import { useState } from "react";

export const Cardapio = ({ pizza, bebida, sobremesa }) => {

  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (Item) => {
    setClickedItem(Item);
  };

  const handleButtonClick = (item) => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    let novoCarrinho;
    if (carrinhoSalvo) {
      novoCarrinho = JSON.parse(carrinhoSalvo);
    } else {
      novoCarrinho = [];
    }
    const existingItem = novoCarrinho.find((cartItem) => cartItem["ID"] === item["ID"]);
    if (existingItem) {
      const updatedCarrinho = novoCarrinho.map((cartItem) =>
        cartItem["ID"] === item["ID"] ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : cartItem
      );
      novoCarrinho = updatedCarrinho;
    } else {
      novoCarrinho.push({ ...item, quantidade: 1 });
    }
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <div className='Cardapio'>
      {createNewCtgr('Pizza',pizza, handleItemClick, clickedItem)}
      {createNewCtgr('Bebidas',bebida, handleItemClick, clickedItem)}
      {createNewCtgr('Sobremesas',sobremesa, handleItemClick, clickedItem)}
      {clickedItem && <ItemBoxSlctd item={clickedItem} handleItemClick={handleItemClick} handleButtonClick={handleButtonClick}/>}
    </div>
  );
};
