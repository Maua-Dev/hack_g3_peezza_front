import React, { useRef, useState, useEffect } from 'react';
import './Pizzaiolo.css';
import { fetchData } from './data/repo_mock';
import TopScreen from './Top/Top';
import MidScreen from './Mid/Mid';
import BottomScreen from './Bottom/Bottom';
import ConfirmScreen from './ConfirmScreen/Confirm';

export default function Pizzaiolo() {

  const [team, setTeam] = useState([{ 'nome': 'Felipe' }, { 'nome': 'Carlos' }]);
  const [orders, setOrders] = useState([]);
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const useInput = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const data = fetchData();
      if (data) {
        const OrdersData = data;
        setOrders(OrdersData);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (isScreenOpen && useInput.current) {
      useInput.current.focus();
    }
  }, [isScreenOpen]); 
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsScreenOpen(true);
    } else if (event.key === 'Escape') {
      setIsScreenOpen(false)
    }
  };

  const focusScreen = useRef(null);

  useEffect(() => {
      focusScreen.current.focus();
  }, [isScreenOpen]);

  return (
    <div className="Pizzaiolo" onKeyDown={handleKeyPress} tabIndex={0} ref={focusScreen}>
      <ConfirmScreen useInput={useInput} isScreenOpen={isScreenOpen} orders={orders} setOrders={setOrders} />
      <TopScreen orders={orders} />
      <MidScreen orders={orders} />
      <BottomScreen team={team} />
    </div>
  );
}