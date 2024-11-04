import React from 'react';
import ReactDOM from 'react-dom/client';


import NavVar from './components/navvar';
import Content from './components/content';
import Picture from './components/picture';
import './stylesheets/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavVar />
    <Content />
  </React.StrictMode>
);

