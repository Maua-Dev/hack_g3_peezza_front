import React, { useState } from "react";
import './Utils.css';
import { NavBar } from "./NavBar/NavBar";
import { BsTable } from "react-icons/bs";

export function LeftBox ({UserName}) {

  const NavBarOption = useState([{Name:'Tables', Icon:BsTable, link:"/"}])



  return (
    <div className="LeftBox">
      <div className="TopBox">
        <h2>Admin</h2>
      </div>
      <div className="PerfilBox"> 
        <img alt="Perfil" src='https://i.pinimg.com/564x/f6/1e/ee/f61eee814f1f3c981df8dc8ff5ad8ef7.jpg' id="UserImge"/>
        <h3>{UserName}</h3>
      </div>
      <div className="NavBox">
        <div className="Tittle">
          <h3>NAVEGATION BAR</h3>
        </div>
        <NavBar Icon={BsTable} Name={'Tables'}/>
      </div>
    </div>
  );
}