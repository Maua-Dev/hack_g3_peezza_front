import React from 'react';
import './Admin.css';
import { LeftBox } from './Utils/Utils';

export default function Admin() {
  
  const Username = 'Felipe';

  return (
    <div className='Admin'>
      <LeftBox UserName={Username}/>
    </div>
  );
}