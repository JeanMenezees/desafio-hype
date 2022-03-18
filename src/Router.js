import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Carrinho from "./pages/Carrinho";
import { CarrinhoProvider } from "./contextos/contextoDeCarrinho";
import { ProdutosProvider } from "./contextos/contextoProdutos";

function Router() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <ProdutosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </ProdutosProvider>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default Router;
