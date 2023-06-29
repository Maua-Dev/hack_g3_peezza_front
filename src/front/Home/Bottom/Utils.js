import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export const ShowCarrinho = (carrinho, handleExcluirItem) => {
    return carrinho.map((Item, index) => (
      <div className='ItemCarrinho' key={index}>
        <div className='Detalhes'>
          <header className='Nome'>{Item.nome}</header>
          <label className='Descricao'>{Item.descricao}</label>
        </div>
        <div className='DivValores'>
          <label className='Valor'>R$ {Item.valor}</label>
          <button className='Lixeira' onClick={() => handleExcluirItem(index)}><BsFillTrash3Fill size={'25px'} /></button>
          <input className='Quantidade' value={Item.quantidade} readOnly></input>
        </div>
      </div>
    ));
  };