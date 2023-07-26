import React from "react";
import './PayButton.css';
import { Link } from "react-router-dom";

export const PayButton = ({ continues, selectedOption }) => {

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


  function saveOrder() {
    var name = JSON.parse(localStorage.getItem("nome"));
    var number = JSON.parse(localStorage.getItem("contato"));
    var cart = JSON.parse(localStorage.getItem("carrinho"));
    var paymentOption = selectedOption;

    var order = {
      name: name,
      number: number,
      cart: cart,
      payment: paymentOption,
      datetime: formattedDateTime,
      status: "Em preparo"
    };

    localStorage.setItem("order", JSON.stringify(order));
  };

  return (
    <Link to={"/client/retirada/"} className="Link">
      <button className="Button" disabled={!continues} onClick={saveOrder}>
        Pagar
      </button>
    </Link>
  );
};