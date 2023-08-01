import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoutesAdmin from './admin_interface/Routes_Admin';
import RoutesClient from './cliente_interface/Routes_Client';
import FirstScreen from './first_screen/FirstScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/admin/*" element={<RoutesAdmin />} />
        <Route path='/client/*' element={<RoutesClient />}/>
      </Routes>
    </Router>
  );
}
