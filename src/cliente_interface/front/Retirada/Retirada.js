import React from 'react';
import './Retirada.css';
import { Top } from './Top/Top';
import { Bottom } from './Bottom/BottomRetirada';
import { Mid } from './MidSection/MidRetirada';
import { useState } from 'react';

export default function Retirada() {
  
  const [isButtonEnabled,setButtonEnabled] = useState(false);  
    return(
      <div className='Retirada'>
        <Top></Top>
        <Mid setButtonEnabled={setButtonEnabled}></Mid>
        <Bottom isButtonEnabled={isButtonEnabled}></Bottom>
      </div>
    );
}