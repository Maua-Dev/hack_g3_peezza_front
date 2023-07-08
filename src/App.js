import React from 'react';
import Home from "./front/Home/Home";
import Payment from "./front/Payment/Payment";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Payment />} path="/pagamento" />
    </Routes>
  );
};