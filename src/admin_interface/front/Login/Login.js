import React, { useState } from 'react';
import './Login.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { fetchData } from "./data/repo_mock";

export default function Login() {

  const [showPassword, setClickedShow] = useState(false);

  const handleShowPassword = () => {
    setClickedShow(!showPassword)
    var x = document.getElementById('password')
    if (x.type === 'password'){
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleLogin = (username, password) => {
    const accounts = fetchData();
    const existingUser = accounts.find((account) => account.username === username && account.password === password) ? (true) : (false);
    console.log(existingUser);
  };

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
          <div className='Input1'>
            <label>Usuario:</label>
            <input type='text' id='username'></input>
          </div>
          <div className='Input2'>
            <label>Senha:</label>
            <div className='PasswordBox'>
              <input type='password' id='password'></input>
              {showPassword ? 
              (<BsFillEyeSlashFill onClick={handleShowPassword} className='showPassword' size={'60px'} color='rgb(209, 209, 209)' />) :
              (<BsFillEyeFill onClick={handleShowPassword} className='showPassword' size={'60px'} color='rgb(209, 209, 209)' />)}
            </div>
          </div>
        </div>
        <div className='BottomBox'>
          <button onClick={() => handleLogin(document.getElementById('username').value, document.getElementById('password').value)}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
