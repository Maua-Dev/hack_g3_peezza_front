import React from 'react';
import './Login.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function Login() {
  return(
    <div className='Login'>
      <div className='LoginBox'>
        <div className='TopBox'>
          <div className='titleBox'>
            <h1>
              pe<span className='diferentColor'>EZ</span>za
            </h1>
          </div>
        </div>
        <div className='MidBox'>
          <div className='Input'>
            <label>Usuario:</label>
            <input></input>
          </div>
          <div className='Input'>
            <label>Senha:</label>
            <input></input>
            <BsFillEyeFill className='showPassword' size={'70px'}></BsFillEyeFill>
            <div className='senhaOptions'>
              <link></link>
            </div>
          </div>
        </div>
        <div className='BottomBox'>
          <button>Acessar</button>
        </div>
      </div>
    </div>
  );
}
