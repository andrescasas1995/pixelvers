import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { links } from './components/molecules/Navbar/Navbar.types';
// Importa los demás componentes según sea necesario

const App: React.FC = () => (
  <div>
    <Navbar />
    <Routes>
      {links.map((link) => <Route path={link.to} element={link.element} />)}
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  </div>
);

export default App;
