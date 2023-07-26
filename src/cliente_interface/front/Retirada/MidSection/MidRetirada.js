import React, { useState, useEffect } from "react";
import './MidRetirada.css';
import gifImage from './Loading4.gif';

export const Mid = () => {
  const nome = localStorage.getItem('nome');
  const storedOrder = JSON.parse(localStorage.getItem('order'));
  const [order, setStatus] = useState(storedOrder || { status: 'Em preparo' });

  useEffect(() => {
    // Function to update the status to "Pronto" after 20 seconds
    const updateStatus = () => {
      setTimeout(() => {
        setStatus(prevOrder => ({
          ...prevOrder,
          status: "Pronto"
        }));
      }, 20000); // 20 seconds (20000 milliseconds)
    };

    // Call the function to start the countdown when the component mounts
    updateStatus();

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(updateStatus);
  }, []);

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
    </div>
  );
}