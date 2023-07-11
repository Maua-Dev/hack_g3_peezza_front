import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Admin-Imports
import RoutesAdmin from './admin_interface/Routes_Admin';

// Client-Imports 
import RoutesClient from './cliente_interface/Routes_Client';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<RoutesAdmin />} />
        <Route path='/*' element={<RoutesClient />}/>
      </Routes>
    </Router>
  );
}