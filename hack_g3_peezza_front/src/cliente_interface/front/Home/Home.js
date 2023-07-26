import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import { Top } from './Top/Top';
import { fetchData } from './data/repo_mock'; // --> Acione quando quiser usar com MOCK
import { Cardapio } from './Cardapio/Cardapio';
import { Bottom } from './Bottom/Bottom';
// import { fetchData } from './data/repo_fastapi'; // --> Acione quando quiser usar com BD

function Home() {
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

  return (
    <div className='App'>
      <Top></Top>
      <Cardapio pizza={pizza} bebida={bebida} sobremesa={sobremesa}/>
      <Bottom></Bottom>
    </div>
  );
};

export default Home;