import React from 'react';
import './Retirada.css';
import { Top } from './Top/Top';
import { Bottom } from './Bottom/Bottom';
import { Mid } from './MidSection/Mid';


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