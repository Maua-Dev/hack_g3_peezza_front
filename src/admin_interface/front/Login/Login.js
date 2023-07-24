import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { fetchData } from "./data/repo_mock";

export default function Login() {

  const navigate = useNavigate();
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

  const handleLogin = (idUser, password) => {

    const accounts = fetchData();
    const existingUser = accounts.find((account) => account.id === idUser && account.password === password);

    if (existingUser) {
      navigate('/admin/'+existingUser.cargo);
    }
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
            <input type='numeric' id='idUser'></input>
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
          <button type='submit' onClick={() => handleLogin(document.getElementById('idUser').value, document.getElementById('password').value)}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
