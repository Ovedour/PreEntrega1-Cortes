//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//estilos
import './index.css';

//Componentes
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import NavBar from './components/NavBar/NavBar.js'
import CartWidget from './components/CartWidget/CartWidget.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'


//core
import reportWebVitals from './reportWebVitals';

//logica
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavBar
    />

    <CartWidget
    />

    <ItemListContainer saludo="hola" despedida="adios"
    />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
