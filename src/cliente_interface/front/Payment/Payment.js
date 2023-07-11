import React from 'react';
import './Payment.css';
import { Top } from './Top/Top';
import { Mid } from './MidSection/MidPayment';
import { Bottom } from './Bottom/BottomPayment';

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