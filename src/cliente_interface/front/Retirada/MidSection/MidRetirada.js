import React, { useState, useEffect } from "react";
import './MidRetirada.css';
import { Bottom } from "../Bottom/BottomRetirada";

export const Mid = ({ setButtonEnabled }) => {
  const storedOrder = JSON.parse(localStorage.getItem('order'));
  const [status, setStatus] = useState(storedOrder['status']);
  if (status === 'Pronto') {
    setButtonEnabled(true);
  }

  useEffect(() => {
    const getStatus = () => {
      const DataPedidos = JSON.parse(localStorage.getItem('Pedidos'));
      const indexItem = DataPedidos.tuples.findIndex(
        (item) => item['Nome'] === storedOrder['Nome'] &&
        item['Contato'] === storedOrder['Contato'] &&
        item['Data e Hora'] === storedOrder['Data e Hora']
      );
      if (indexItem !== -1) {
        const statuslocal = DataPedidos.tuples[indexItem]['status'];
        localStorage.setItem('order', JSON.stringify(DataPedidos.tuples[indexItem]));
        setStatus(statuslocal);
        if (statuslocal === 'Pronto') {
          setButtonEnabled(true);
        }
      }
    };
    const intervalId = setInterval(getStatus, 5000);
    return () => clearInterval(intervalId);
  }, [setButtonEnabled, setStatus, storedOrder]);
  

  return (
    <div className="mid_p">
      <div className="pedido">
        <h1>{storedOrder.Nome} seu pedido foi enviado:</h1>
      </div>
      <div>
        <img src={"https://djzvsk74tjgdb.cloudfront.net/peeza/Outros/LoadingPizza.gif"} alt="Loading..." />
        <div className="status">
          <span>Status:</span>
          <div className="line"></div>
        </div>
        <span className="centered">{status}</span>
      </div>
      <Bottom status={status} />
    </div>
  );
}
