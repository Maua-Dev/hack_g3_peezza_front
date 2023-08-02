import React from "react";
import './PayButton.css';
import { Link } from "react-router-dom";
import { addItem } from "../../../../../back_operation_mock/repo_mock";

export const PayButton = ({ continues, selectedOption }) => {

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;


  function saveOrder() {
    try {
      var name = JSON.parse(localStorage.getItem("nome"));
      var number = JSON.parse(localStorage.getItem("contato"));
      var cart = JSON.parse(localStorage.getItem("carrinho"));
      var valorTotal = JSON.parse(localStorage.getItem("valorTotal"));
      var paymentOption = selectedOption;

      switch (paymentOption) {
        case "pix":
          paymentOption = "Pix";
          break;
        case "cartaocredito":
          paymentOption = "Cartão de Crédito";
          break;
        case "cartaodebito":
          paymentOption = "Cartão de Débito";
          break;
        default:
          paymentOption = "Erro";
      }
      
      var order = {
        Nome: name,
        Contato: number,
        "Valor Total": valorTotal,
        "Método de Pagamento": paymentOption,
        "Data e Hora": formattedDateTime,
        cart: cart,
        status: "Em preparo",
      };

      localStorage.setItem("order", JSON.stringify(order));
      addItem("Pedidos", order);
      console.log(order); 

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link to={"/client/retirada/"} className="Link">
      <button className="Button" disabled={!continues} onClick={saveOrder}>
        Pagar
      </button>
    </Link>
  );
};