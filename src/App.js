import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Carrinho from "./pages/Carrinho";
import ContextoCarrinho from "./contextos/contextoDeCarrinho";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <Router>
      <ContextoCarrinho.Provider
        value={{
          carrinho: carrinho,
          setCarrinho: setCarrinho
        }}
      >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/carrinho" element={<Carrinho carrinho={carrinho}/>} />
        </Routes>
      </ContextoCarrinho.Provider>
    </Router>
  );
}

export default App;
