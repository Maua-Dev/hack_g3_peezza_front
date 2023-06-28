import React from "react";
import "./Cardapio.css";
import { createNewCtgr, ItemBoxSlctd } from "./Utils"
import { useState } from "react";

export const Cardapio = ({ pizza, bebida, sobremesa }) => {

  const [carrinho, setCarrinho] = useState([]);


  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (Item) => {
    setClickedItem(Item);
  };

  const handleButtonClick = (item) => {
    const existingItem = carrinho.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCarrinho = carrinho.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantidade: cartItem.quantidade + 1 } : cartItem
      );
      setCarrinho(updatedCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
    } else {
      const updatedCarrinho = [...carrinho, { ...item, quantidade: 1 }]
      setCarrinho(updatedCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
    }
    console.log(carrinho)
  }

  return (
    <div className='Cardapio'>
      {createNewCtgr('Pizza',pizza, handleItemClick, clickedItem)}
      {createNewCtgr('Bebidas',bebida, handleItemClick, clickedItem)}
      {createNewCtgr('Sobremesas',sobremesa, handleItemClick, clickedItem)}
      {clickedItem && <ItemBoxSlctd item={clickedItem} handleItemClick={handleItemClick} handleButtonClick={handleButtonClick}/>}
    </div>
  );
};