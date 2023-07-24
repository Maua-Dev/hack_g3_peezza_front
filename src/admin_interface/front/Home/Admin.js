import React, {useState} from 'react';
import './Admin.css';
import { LeftBox } from './LeftBox/Utils/Utils';
import RightBox from './RightBox/Utils/Utils';

export default function Admin() {
  
  const Username = 'Felipe';
  const [selectedOption, setSelectedOption] = useState(null);

  

  return (
    <div className='Admin'>
      <LeftBox UserName={Username} setSelectedOption={setSelectedOption} />
      <RightBox selectedOption={selectedOption}></RightBox>
    </div>
  );
}