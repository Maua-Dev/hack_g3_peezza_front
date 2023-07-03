import React from "react";
import "./Bottom.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { Cadastro, CarrinhoBox, ShowCarrinho } from './Utils';

export const Bottom = () => {

  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const valorTotal = carrinho.reduce((total, item) => {
    return total + parseFloat(item.valor) * parseInt(item.quantidade);
  }, parseFloat('0.00'));
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
  const [continuarAtivo, setContinuarAtivo] = useState(false);

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

  

  const handleContinueClick = () => {
    localStorage.setItem('nome', JSON.stringify(nome))
    localStorage.setItem('contato', JSON.stringify(contato))
    localStorage.setItem('valorTotal', JSON.stringify(valorTotal))
  };

  const validarBotaoContinuar = () => {
    const carrinhoVazio = carrinho.length === 0;
    const isNomeContatoVazios = nome.trim() === '' || contato.trim() === '';
    const isBotaoAtivo = !carrinhoVazio && !isNomeContatoVazios;
    setContinuarAtivo(isBotaoAtivo);
  };

  useEffect(() => {
      validarBotaoContinuar(); // eslint-disable-next-line
    }, [nome, contato, carrinho]);
    
  return (
    <div className={`Carrinho ${carrinhoAtivo ? 'Active' : ''}`}>
        <button onClick={handleCarrinhoClick}>
          <span>
          R$ {valorTotal.toFixed(2)} <TiShoppingCart size={'35px'} />Carrinho
          </span>
        </button>
        {Cadastro(nome,contato,setNome,setContato)}
        {CarrinhoBox(carrinho,handleExcluirItem)}
        <div className='DownCarrinho'>
          <h2>Total: R$ {valorTotal.toFixed(2)}</h2>
          {continuarAtivo ? (
          <Link to="/pagamento" onClick={handleContinueClick}>
            <button>Continuar</button>
          </Link>
          ) : (
          <button disabled>Continuar</button>
          )}
        </div>
      </div>
  );
};
