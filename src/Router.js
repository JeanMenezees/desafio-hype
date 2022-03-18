import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Carrinho from "./pages/Carrinho";
import ContextoCarrinho from "./contextos/contextoDeCarrinho";

function Router() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Router;
