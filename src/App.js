import React, { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import BarraDeFiltro from "./components/PaginaInicial/BarraDeFiltros";
import ListaProdutos from "./components/PaginaInicial/ListaDeProdutos";
import ContextoProdutos from "../src/contextos/contextoProdutos.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtrarFav, setFiltrarFav] = useState(false);
  const [nome, setNome] = useState("");

  function cololocarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function deveFiltrarHandler() {
    if(filtrarFav === true) {
      setFiltrarFav(false);
    }
    else{
      setFiltrarFav(true);
    }
  }

  return (
    <>
      <ContextoProdutos.Provider
        value={{
          colocarCarrinho: cololocarCarrinho,
          qtdItems: carrinho.length,
          filtrar: filtrarFav,
          setFiltrar: deveFiltrarHandler,
          nome: nome,
          setNome: setNome,
        }}
      >
        <Cabecalho />
        <BarraDeFiltro />
        <ListaProdutos />
      </ContextoProdutos.Provider>
    </>
  );
}

export default App;