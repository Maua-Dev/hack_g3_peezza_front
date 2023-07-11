import React from 'react';
import './Retirada.css';
import { Top } from './Top/Top';
import { Bottom } from './Bottom/BottomRetirada';
import { Mid } from './MidSection/MidRetirada';


function Retirada() {
    return(
      <div className='App'>
        <Top></Top>
        <Mid></Mid>
        <Bottom></Bottom>
      </div>
      // <Link to="/">
      //   <button>Olá</button>  
      // </Link>
    );
}
export default Retirada;