import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './front/Home/Home';
import Payment from './front/Payment/Payment';
import Retirada from './front/Retirada/Retirada';

export default function RoutesClient() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagamento" element={<Payment />} />
      <Route path="/retirada" element={<Retirada />} />
    </Routes>
  );
}