import React from "react";
import "./Utils.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export const Cadastro = (nome, contato, setNome, setContato) => {

  const handleNomeChange = (event) => {
    setNome(event.target.value);
    localStorage.setItem('nome', JSON.stringify(event.target.value))
  };

  const handleContatoChange = (event) => {
    setContato(event.target.value);
    localStorage.setItem('contato', JSON.stringify(event.target.value))
  };

  return (
    <div className='Cadastro'>
      <div className="form__group field">
        <input type="text" className="form__field" placeholder="Nome" name={nome} value={nome} id='name' required onChange={handleNomeChange} />
        <label htmlFor="name" className="form__label">Nome</label>
      </div>
      <div className="form__group field">
        <input type="tel" className="form__field" placeholder="Número de Contato" name={contato} value={contato} id='contato' required onChange={handleContatoChange}/>
        <label htmlFor="contato" className="form__label">Número de Contato</label>
      </div>
    </div>
  );
};

export const CarrinhoBox = (carrinho,handleExcluirItem) => {

  const ShowCarrinho = (carrinho, handleExcluirItem) => {
    return carrinho.map((Item, index) => (
      <div className='ItemCarrinho' key={index}>
        <img className="image" src={Item.imagem} alt={Item.nome}></img>
        <div className='Detalhes'>
          <header className='Nome'>{Item.nome}</header>
          <div className="down">
            <label className='Valor'>R$ {Item.valor}</label>
            <div className='DivQuantidade'>
              <div className='Lixeira' onClick={() => handleExcluirItem(index)}>
              <BsFillTrash3Fill size={'20px'} />
              </div>
              <input className='Quantidade' value={Item.quantidade} readOnly></input>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return(
    <div className='CarrinhoBox'>
    {ShowCarrinho(carrinho,handleExcluirItem)}
  </div>
  )
};