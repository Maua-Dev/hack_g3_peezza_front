import React from 'react';
import './Retirada.css';
import { Top } from './Top/Top';
import { Bottom } from './Bottom/BottomRetirada';
import { Mid } from './MidSection/MidRetirada';


export default function Retirada() {
    return(
      <div className='Retirada'>
        <Top></Top>
        <Mid></Mid>
      </div>
    );
}