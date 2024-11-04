import React from 'react';
import ReactDOM from 'react-dom/client';


import NavBar from './components/navbar';
import Content from './components/content';
import Picture from './components/picture';
import './stylesheets/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Content />
  </React.StrictMode>
);

