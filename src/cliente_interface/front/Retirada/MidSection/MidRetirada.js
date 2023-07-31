import React, { useState, useEffect } from "react";
import './MidRetirada.css';
import gifImage from './Loading4.gif';
import { Bottom } from "../Bottom/BottomRetirada";

export const Mid = () => {
  const nome = localStorage.getItem('nome');
  const storedOrder = JSON.parse(localStorage.getItem('order'));
  const [order, setStatus] = useState(storedOrder || { status: 'Em preparo' });
  const [status, setMidStatus] = useState(order.status);

  useEffect(() => {
    
    const updateStatus = () => {
      setTimeout(() => {
        setStatus(prevOrder => ({
          ...prevOrder,
          status: "Pronto"
        }));
      }, 2000); 
    };
    updateStatus();

    return () => clearTimeout(updateStatus);
  }, []);

  useEffect(() => {
    
    setMidStatus(order.status);
  }, [order.status]);

  return (
    <div className="mid_p">
      <div className="pedido">
        <h1>{nome} seu pedido foi enviado:</h1>
      </div>
      <div>
        <img src={gifImage} alt="Loading..." />
        <div className="status">
          <span>Status:</span>
          <div className="line"></div>
        </div>
        <span className="centered">{order.status}</span>
      </div>
      {}
      <Bottom status={status} />
    </div>
  );
}
