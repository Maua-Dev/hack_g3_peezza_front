import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FirstScreen.css";
import { fetchData } from "../back_operation_mock/repo_mock";

export default function FirstScreen() {

  useEffect (() => {
    fetchData("Pedidos");
    fetchData("Cardapio");
    fetchData("Funcionario");
    fetchData("Feedbacks");
  }, []);

  return (
    <div className="FirstScreen">
      <Link to='/admin' className="Box" id="admin">
        <div className="BoxTitle">Estabelecimento (Desktop)</div>
      </Link>
      <Link to='/client'className="Box" id="client">
        <div className="BoxTitle">Cliente (Mobile)</div>
      </Link>
    </div>
  );
}