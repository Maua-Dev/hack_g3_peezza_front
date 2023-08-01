import { useEffect, useState } from 'react';
import React from 'react';
import './Home.css';
import { Top } from './Top/Top';
import { Cardapio } from './Cardapio/Cardapio';
import { Bottom } from './Bottom/Bottom';
import { fetchDataCardapio } from '../../../back_operation_mock/repo_mock';

function Home() {
  const [pizza, setPizza] = useState([]);
  const [bebida, setBebida] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = fetchDataCardapio();
      console.log(data)
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