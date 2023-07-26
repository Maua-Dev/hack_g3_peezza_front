import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './front/Login/Login';
import Admin from './front/Home/Admin';
import Pizzaiolo from './front/Pizzaiolo_Interface/Pizzaiolo';

export default function RoutesAdmin() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/administrador' element={<Admin />} />
      <Route path='/pizzaiolo' element={<Pizzaiolo />} />
    </Routes>
  );
}