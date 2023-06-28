import React from "react";
import "./Bottom.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ShowCarrinho } from './Utils';

export const Bottom = () => {

  const [carrinho, setCarrinho] = useState([]);
  const valorTotal = carrinho.reduce((total, item) => {
    return total + parseFloat(item.valor) * parseInt(item.quantidade);
  }, parseFloat('0.00'));
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);

  const handleCarrinhoClick = () => {
    setCarrinhoAtivo(!carrinhoAtivo);
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  };

  const handleExcluirItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  useEffect(() => {
    console.log(carrinho);
  }, [carrinho]);

  return (
    <div className={`Carrinho ${carrinhoAtivo ? 'Active' : ''}`}>
        <button onClick={handleCarrinhoClick}>
          <span>
            Carrinho
          </span>
        </button>
        <div className='Cadastro'>
          <h1>
            Nome
            <input></input>
          </h1>
          <h1>
            Número de Contato
            <input></input>
          </h1>
        </div>
        <div className='CarrinhoBox'>
          {ShowCarrinho(carrinho,handleExcluirItem)}
        </div>
        <div className='DownCarrinho'>
          <h2>Total: R$ {valorTotal.toFixed(2)}</h2>
          <Link to="/pagamento">
            <button>Continuar</button>
          </Link>
        </div>
      </div>
  );
};
