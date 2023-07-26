import React, { useState } from 'react';
import './Payment.css';
import { Top } from './Top/Top';
import { Mid } from './MidSection/MidPayment';
import { Bottom } from './Bottom/BottomPayment';

function Payment() {

  const [continues, setContinues] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='App'>
      <Top></Top>
      <Mid setContinues={setContinues} selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Mid>
      <Bottom continues={continues} selectedOption={selectedOption} ></Bottom>
    </div>
  );
}
export default Payment;