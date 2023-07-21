import React, { useState } from "react";
import './NavBar.css';
import { BsTable } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TablesOptions } from "./Options/TablesOption";

export function NavBar({ Icon, Name, setSelectedOption }) {

  const [showTables, setShowTables] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [navBgdColor, setNavBgdColor] = useState('transparent');
  const [navTranslateX, setNavTranslatex] = useState(0);

  const handleNavTablesClick = () => {
    setShowTables(!showTables);
    setNavBgdColor(navBgdColor === "rgb(19, 93, 177)" ? 'transparent' : 'rgb(19, 93, 177)')
    setNavTranslatex(navTranslateX === 0 ? 100 : 0)
    setArrowRotation(arrowRotation === 0 ? -90 : 0);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };



  return (
    <>
      <div className={"NavTables"} style={{ background: navBgdColor }} onClick={handleNavTablesClick}>
        <div className="tittle" style={{ transform: `translateX(${navTranslateX}%)` }}>
          <BsTable id="icon" />
          <h4 id="name">{Name}</h4>
        </div>
        <MdOutlineKeyboardArrowLeft id="arrow" style={{ transform: `rotate(${arrowRotation}deg)` }} />
      </div>
      {showTables && <TablesOptions handleOptionClick={handleOptionClick} />}
      <div className="NavOptions" onClick={() => handleOptionClick('DashBoard')}>
        <div className="tittle">
          <Icon id="icon" />
          <h4 id="name">{Name}</h4>
        </div>
      </div>
    </>

  );
}