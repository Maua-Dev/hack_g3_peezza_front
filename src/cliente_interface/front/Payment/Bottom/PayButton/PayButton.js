import React from "react";
import './PayButton.css';
import { Link } from "react-router-dom";

export const PayButton = ({ continues, selectedOption }) => {

  function saveOrder() {
    var name = JSON.parse(localStorage.getItem("nome"));
    var number = JSON.parse(localStorage.getItem("contato"));
    var cart = JSON.parse(localStorage.getItem("carrinho"));
    var paymentOption = selectedOption;

    var order = {
      name: name,
      number: number,
      cart: cart,
      payment: paymentOption
    };

    console.log(order)

  };

  return (
    <Link to={"/client/retirada/"} className="Link">
      <button className="Button" disabled={!continues} onClick={saveOrder}>
        Pagar
      </button>
    </Link>
  );
};