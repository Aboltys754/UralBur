import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header/Header';
import './scss/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);