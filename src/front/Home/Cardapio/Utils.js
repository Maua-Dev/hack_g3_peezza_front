import React from "react";

// Home - Gera nova tupla de itens Cardapio

export const createNewCtgr = (Tittle,category, handleItemClick, clickedItem, showItens) => {
  return (
    <div className="box">
        <div className="cabecalho">
          <h1 className="text-h1">{Tittle}</h1>
          <div className="line"></div>
        </div>
        <div className='Itens-Show'>
          {showItens(category, handleItemClick, clickedItem)}
        </div>
      </div>
  );
};

// Home - Cardapio 
export const showItens = (item, handleItemClick, clickedItem) => {
    return item.map((Item) => (
      <div className={`Item ${clickedItem === Item.id ? 'Clicked' : ''}`}>
        <img className={'imagem'}src="Images/Mussarela.png" alt="Imagem"></img>
        <header className='Nome'>{Item.nome}</header>
        <label className='Valor'>R$ {Item.valor}</label>
        <button onClick={() => handleItemClick(Item)}></button>
      </div>
    ));
  };