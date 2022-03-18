import React, { useContext, useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import BarraDeFiltro from "../../components/BarraDeFiltros";
import ListaProdutos from "../../components/ListaDeProdutos";
import ContextoProdutos from "../../contextos/contextoProdutos";
import ContextoCarrinho from "../../contextos/contextoDeCarrinho";
import { construirLista } from "../../servicos/servicoProdutos";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtrarFav, setFiltrarFav] = useState(false);
  const [nome, setNome] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const contexto = useContext(ContextoCarrinho);

  useEffect(() => {
    contexto.setCarrinho(carrinho);
  }, [carrinho]);

  useEffect(() => {
    construirLista()
      .then((produtos) => {
        setProdutos(produtos);
      })
      .then(() => setCarregando(false));
  }, []);

  function cololocarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function deveFiltrarHandler() {
    if (filtrarFav === true) {
      setFiltrarFav(false);
    } else {
      setFiltrarFav(true);
    }
  }

  function favoritarHandler(verbo) {
    var produto = produtos.filter((item) => item.verbo === verbo)[0];
    var posicaoProduto = produtos.indexOf(produto);

    setProdutos((antigos) => {
      antigos[posicaoProduto].favoritado = true;

      return antigos;
    });
  }

  function desfavoritarHandler(verbo) {
    var produto = produtos.filter((item) => item.verbo === verbo)[0];
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
          desfavoritar: desfavoritarHandler,
          carregando: carregando,
        }}
      >
        <Cabecalho />
        <BarraDeFiltro />
        <ListaProdutos produtos={produtos} />
      </ContextoProdutos.Provider>
    </>
  );
}

export default App;
