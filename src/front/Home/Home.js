import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import { Top } from './Top/Top'
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { fetchData } from './data/repo_mock'; // --> Acione quando quiser usar com MOCK
import { Cardapio } from './Cardapio/Cardapio';
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

  return (
    <div className='App'>
      <Top></Top>
      <Cardapio pizza={pizza} bebida={bebida} sobremesa={sobremesa}/>
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