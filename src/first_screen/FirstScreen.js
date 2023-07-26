import React from "react";
import { Link } from "react-router-dom";
import "./FirstScreen.css";

export default function FirstScreen() {
  return (
    <div className="FirstScreen">
      <Link to='/admin' className="Box" id="admin">
        <div className="BoxTitle">Estabelecimento</div>
      </Link>
      <Link to='/client'className="Box" id="client">
        <div className="BoxTitle">Cliente</div>
      </Link>
    </div>
  );
}