import React, {useState} from 'react';
import './Admin.css';
import { LeftBox } from './LeftBox/Utils/Utils';
import RightBox from './RightBox/Utils/Utils';

export default function Admin() {
  
  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user);
  const Username = userJson.Nome;
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='Admin'>
      <LeftBox UserName={Username} setSelectedOption={setSelectedOption} />
      <RightBox selectedOption={selectedOption}></RightBox>
    </div>
  );
}