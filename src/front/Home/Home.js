import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import { Top } from './Top/Top'
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { fetchData } from './data/repo_mock'; // --> Acione quando quiser usar com MOCK
// import { fetchData } from './data/repo_fastapi'; // --> Acione quando quiser usar com BD

function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const valorTotal = carrinho.reduce((total, item) => {
    return total + parseFloat(item.valor) * parseInt(item.quantidade);
  }, parseFloat('0.00'));
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(false);
  const [pizza, setPizza] = useState([]);
  const [bebida, setBebida] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = fetchData();
      if (data) {
        const { pizza, bebida, sobremesa } = data;
        setPizza(pizza);
        setBebida(bebida);
        setSobremesa(sobremesa);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  const handleItemClick = (item) => {
    setClickedItem(item.id);
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
    setTimeout(() => {
      setClickedItem(null);
    }, 100);
  };

  const handleCarrinhoClick = () => {
    setCarrinhoAtivo(!carrinhoAtivo);
  };

  const handleExcluirItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const ShowItens = (item) => {
    return item.map((Item) => (
      <button
        key={Item.id}
        className={`Item ${clickedItem === Item.id ? 'Clicked' : ''}`}
        onClick={() => handleItemClick(Item)}
      >
        <header className='Nome'>{Item.nome}</header>
        <label className='Descricao'>{Item.descrição}</label>
        <label className='Valor'>R$ {Item.valor}</label>
      </button>
    ));
  };

  const ShowCarrinho = () => {
    return carrinho.map((Item, index) => (
      <div className='ItemCarrinho' key={index}>
        <div className='Detalhes'>
          <header className='Nome'>{Item.nome}</header>
          <label className='Descricao'>{Item.descrição}</label>
        </div>
        <div className='DivValores'>
          <label className='Valor'>R$ {Item.valor}</label>
          <button className='Lixeira' onClick={() => handleExcluirItem(index)}><BsFillTrash3Fill size={'25px'} /></button>
          <input className='Quantidade' value={Item.quantidade} readOnly></input>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    console.log(carrinho);
  }, [carrinho]);

  return (
    <div className='App'>
      <Top></Top>
      <div className='Cardapio'>
        <h1>Pizzas</h1>
        <div className='Pizzas'>
          {ShowItens(pizza)}
        </div>
        <h1>Bebidas</h1>
        <div className='Bebidas'>
          {ShowItens(bebida)}
        </div>
        <h1>Sobremesas</h1>
        <div className='Sobremesa'>
          {ShowItens(sobremesa)}
        </div>
      </div>
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
          {ShowCarrinho()}
        </div>
        <div className='DownCarrinho'>
          <h2>Total: R$ {valorTotal.toFixed(2)}</h2>
          <Link to="/pagamento">
            <button>Continuar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;