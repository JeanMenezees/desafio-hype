import React, { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho";
import BarraDeFiltro from "./components/PaginaInicial/BarraDeFiltros";
import ListaProdutos from "./components/PaginaInicial/ListaDeProdutos";
import ContextoProdutos from "../src/contextos/contextoProdutos.js";
import { construirLista } from "./components/helpers/random";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtrarFav, setFiltrarFav] = useState(false);
  const [nome, setNome] = useState("");
  const [produtos, setProdutos] = useState(construirLista());

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

  function favoritarHandler(verbo) {
    var produto = produtos.filter(item => item.verbo === verbo)[0];
    var posicaoProduto = produtos.indexOf(produto);

    setProdutos((antigos) => {
      antigos[posicaoProduto].favoritado = true;
      
      return antigos;
    });
  }

  function desfavoritarHandler(verbo) {
    var produto = produtos.filter(item => item.verbo === verbo)[0];
    var posicaoProduto = produtos.indexOf(produto);

    setProdutos((antigos) => {
      antigos[posicaoProduto].favoritado = false;
      
      return antigos;
    });
  }

  return (
    <>
      <ContextoProdutos.Provider
        value={{
          colocarCarrinho: cololocarCarrinho,
          qtdItems: carrinho.length,
          setFiltrar: deveFiltrarHandler,
          nome: nome,
          deveFiltrar: filtrarFav,
          setNome: setNome,
          favoritar: favoritarHandler,
          desfavoritar: desfavoritarHandler
        }}
      >
        <Cabecalho />
        <BarraDeFiltro />
        <ListaProdutos produtos={produtos}/>
      </ContextoProdutos.Provider>
    </>
  );
}

export default App;