import React from "react";
import "./Bottom.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { Cadastro, CarrinhoBox } from './Utils';

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
      validarBotaoContinuar();
    }, [nome, contato, carrinho]);
    
  return (
    <div className={`Carrinho ${carrinhoAtivo ? 'Active' : ''}`}>
        <button onClick={handleCarrinhoClick}>
          <span>
            Carrinho
          </span>
        </button>
        {Cadastro(nome,contato,setNome,setContato)}
        {CarrinhoBox(carrinho,handleExcluirItem)}
        <div className='DownCarrinho'>
          <div className="TotalBox">
            <p>R$ {valorTotal.toFixed(2)}</p>
            <TiShoppingCart className="IconCart" size={'35px'} />
          </div>
          {continuarAtivo ? (
          <Link to="/pagamento" onClick={handleContinueClick}>
            <button className="ButtonAitivado">Pagamento</button>
          </Link>
          ) : (
          <button disabled >Pagamento</button>
          )}
        </div>
      </div>
  );
};
