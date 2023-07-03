import React from "react";
import "./Utils.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export const Cadastro = (nome, contato, setNome, setContato) => {

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleContatoChange = (event) => {
    setContato(event.target.value);
  };

  return (
    <div className='Cadastro'>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Nome" name={nome} id='name' required />
        <label for="name" class="form__label">Nome</label>
      </div>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Número de Contato" name={contato} id='contato' required />
        <label for="contato" class="form__label">Número de Contato</label>
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
          <label className='Valor'>R$ {Item.valor}</label>
        </div>
        <div className='DivQuantidade'>
          <div className='Lixeira' onClick={() => handleExcluirItem(index)}>
            <BsFillTrash3Fill size={'20px'} />
          </div>
          <input className='Quantidade' value={Item.quantidade} readOnly></input>
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