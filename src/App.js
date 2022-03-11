import React, { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho";
import BarraDeFiltro from "./components/PaginaInicial/BarraDeFiltros";
import ListaProdutos from "./components/PaginaInicial/ListaDeProdutos";
import ContextoProdutos from "../src/contextos/contextoProdutos.js";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtrarFav, setFiltrarFav] = useState(false);
  const [nome, setNome] = useState(" ");

  function cololocarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  return (
    <>
      <ContextoProdutos.Provider
        value={{
          colocarCarrinho: cololocarCarrinho,
          qtdItems: carrinho.length,
          filtrar: filtrarFav,
          setFiltrar: setFiltrarFav,
          nome: nome,
          setNome: setNome
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
