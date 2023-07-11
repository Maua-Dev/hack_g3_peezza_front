import React from "react";
import './Mid.css';
import { BackToPayment } from "./BackToPayment/BackToPayment";
import gifImage from './Loading.gif';
export const Mid = () => {
    return (
      <div className="mid">
         <BackToPayment /> 
            <div>
              <img src={gifImage} alt="Loading..." />
            </div>
          
        
      </div>
    );
}