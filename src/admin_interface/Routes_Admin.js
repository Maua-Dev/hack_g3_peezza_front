import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './front/Login/Login';
import Home from './front/Home/Home';
import Pizzaiolo from './front/Pizzaiolo_Interface/Pizzaiolo';

export default function RoutesAdmin() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/administrador' element={<Home />} />
      <Route path='/pizzaiolo' element={<Pizzaiolo />} />
    </Routes>
  );
}