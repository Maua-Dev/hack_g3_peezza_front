import React from 'react';
import Login from "./admin_interface/front/Home/Login";
import Home from "./cliente_interface/front/Home/Home";
import Payment from "./cliente_interface/front/Payment/Payment";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route element={<Login />} path='/admin' exact />
      <Route element={<Home />} path="/" />
      <Route element={<Payment />} path="/pagamento" />
    </Routes>
  );
};