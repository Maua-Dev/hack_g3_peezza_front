import React from "react";
import './PayButton.css';
import { Link } from "react-router-dom";
import axios from "axios";

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

    fetch('http://localhost:8000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Order saved successfully!', data);
        // You can perform additional actions here after the order is successfully saved
      })
      .catch(error => {
        console.error('Error saving order:', error);
        // Handle the error in case the order saving fails
      });
  };

  return (
    <Link to={"/retirada"} className="Link">
      <button className="Button" disabled={!continues} onClick={saveOrder}>
        Pagar
      </button>
    </Link>
  );
};