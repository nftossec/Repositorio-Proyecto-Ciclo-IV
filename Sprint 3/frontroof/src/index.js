import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

//pensamiento de trabajo por componentes
root.render(
  <BrowserRouter>
  <App></App></BrowserRouter>); //esto es un componente renderizado en el index
