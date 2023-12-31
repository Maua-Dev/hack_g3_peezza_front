// Pizzaiolo.js

import React, { useRef, useState, useEffect } from 'react';
import './Pizzaiolo.css';
import { fetchDataOrders } from '../../../back_operation_mock/repo_mock'; // Assuming you have the updateItem function in the correct file
import TopScreen from './Top/Top';
import MidScreen from './Mid/Mid';
import BottomScreen from './Bottom/Bottom';
import ConfirmScreen from './ConfirmScreen/Confirm';

export default function Pizzaiolo() {

  const [orders, setOrders] = useState([]);
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const useInput = useRef(null);
  const focusScreen = useRef(null);
  const [closedOrders, setClosedOrders] = useState(0);
  const [numberOrders, setNumberOrders] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = fetchDataOrders();
      if (data) {
        const OrdersData = data.OrdersToDo;
        setOrders(OrdersData);
        setNumberOrders(closedOrders + orders.length);
      } else {
        console.log("Não foi possível carregar os pedidos.");
      }
    };
    getData();
    const interval = setInterval(getData, 5000);
    return () => clearInterval(interval);
  }, [orders.length, closedOrders]);

  useEffect(() => {
    if (isScreenOpen && useInput.current) {
      useInput.current.focus();
    }
  }, [isScreenOpen]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (isScreenOpen) {
        setIsScreenOpen(false);
      } else {
        setIsScreenOpen(true);
      }
    } else if (event.key === 'Escape') {
      setIsScreenOpen(false);
    }
  };

  useEffect(() => {
    focusScreen.current.focus();
  }, [isScreenOpen]);

  return (
    <div className="Pizzaiolo" onKeyDown={handleKeyPress} tabIndex={0} ref={focusScreen}>
      <ConfirmScreen useInput={useInput} isScreenOpen={isScreenOpen} orders={orders} closedOrders={closedOrders} setClosedOrders={setClosedOrders} setNumberOrders={setNumberOrders} />
      <TopScreen orders={orders} closedOrders={closedOrders} numberOrders={numberOrders} />
      <MidScreen orders={orders} />
      <BottomScreen />
    </div>
  );
}
