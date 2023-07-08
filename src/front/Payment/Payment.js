import React from 'react';
import './Payment.css';
import { Top } from './Top/Top';
import { Mid } from './MidSection/Mid';
import { Bottom } from './Bottom/Bottom';

function Payment() {
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
export default Payment;