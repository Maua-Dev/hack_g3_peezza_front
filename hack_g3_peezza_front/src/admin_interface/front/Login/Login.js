import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { fetchData } from "../../../back_operation_mock/repo_mock";

export default function Login() {

  const navigate = useNavigate();
  const [showPassword, setClickedShow] = useState(false);

  const handleShowPassword = () => {
    setClickedShow(!showPassword)
    var x = document.getElementById('password')
    if (x.type === 'password') {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleLogin = () => {
    const accounts = fetchData('Funcionario').tuples;
    const idUser = document.getElementById('idUser').value.trim();
    const password = document.getElementById('password').value;

    const existingUser = accounts.find((account) => account.id.toString() === idUser && account.password === password);

    if (existingUser) {
      navigate('administrador/');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };


  return (
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
          <button type='submit' onClick={() => handleLogin()}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
