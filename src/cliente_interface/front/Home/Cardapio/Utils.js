import React from "react";
import "./Cardapio.css";
// Home - Gera nova tupla de itens Cardapio

export const createNewCtgr = (Tittle,category, handleItemClick, clickedItem) => {
  return (
    <div className="box">
        <div className="cabecalho">
          <h1 className="text-h1">{Tittle}</h1>
          <div className="line" />
        </div>
        <div className='Itens-Show'>
          {showItens(category, handleItemClick, clickedItem)}
        </div>
      </div>
  );
};

// Home - Cardapio 
export const showItens = (item, handleItemClick, clickedItem) => {
    return item.map((Item,index) => (
      <div key={index} className={`Item ${clickedItem === Item ? 'Clicked' : ''}`}>
        <img className={'imagem'} src={Item.Imagem} alt="Imagem"></img>
        <header className='nome'>{Item.Item}</header>
        <label className='valor'>R$ {Item.Preço}</label>
        <button onClick={() => handleItemClick(Item)}></button>
      </div>
    ));
  };

export const ItemBoxSlctd = ({item, handleItemClick, handleButtonClick}) => {
  return (
    <div className="ItemBoxSlctd">
      <div className="blur" onClick={() => {handleItemClick(null)}}></div>
      <div className="box">
        <img className='imagem' src={item.Imagem} alt="Imagem"></img>
        <div className="text-item">
          <header>{item.Item}</header>
          <label className="descricao">{item.Descrição}</label>
          <label className="valor">R$ {item.Preço}</label>
          <button onClick = {() => {handleButtonClick(item)}} >Adicionar</button>
        </div>
      </div>
    </div>
  );
};