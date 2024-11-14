import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { UserProvider } from './contexts/UserContext';
import { SelectedAssistantsProvider } from './contexts/SelectedAssistantsContext'; // Importa el proveedor
import './stylesheets/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <SelectedAssistantsProvider> {/* Envuelve la aplicación */}
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </SelectedAssistantsProvider>
    </UserProvider>
  </React.StrictMode>
);
