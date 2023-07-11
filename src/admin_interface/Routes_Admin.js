import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './front/Login/Login';

export default function RoutesAdmin() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}