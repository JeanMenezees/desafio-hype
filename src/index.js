import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Carrinho from './components/Carrinho/carrinho';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/carrinho" element={<Carrinho />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
