import React from "react";
import './Options.css';
import { Link } from "react-router-dom";

export const Options = () => {

  const option = () => {
    return (
      <div>
        <img></img>
        <label></label>
      </div>
    );
  }

  return (
    <div className="Options">
      {option}
      {option}
      {option}
    </div>
  );
};
