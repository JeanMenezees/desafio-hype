import React, { useState, useEffect } from "react";
import { UseConstruirLista } from "../hooks/servicoProdutos";

const ContextoProdutos = React.createContext();

export const ProdutosProvider = ({ children }) => {
  const [deveFiltrarFav, setDeveFiltrarFav] = useState(false);
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [aparecerModal, setAparecerModal] = useState(false);

  function deveFiltrarHandler() {
    if (deveFiltrarFav === true) {
      setDeveFiltrarFav(false);
    } else {
      setDeveFiltrarFav(true);
    }
  }

  function favoritar(verbo) {
    var produto = produtos.filter((item) => item.verbo === verbo)[0];
    var posicaoProduto = produtos.indexOf(produto);

    setProdutos((antigos) => {
      antigos[posicaoProduto].favoritado = true;

      return antigos;
    });
  }

  function desfavoritar(verbo) {
    var produto = produtos.filter((item) => item.verbo === verbo)[0];
    var posicaoProduto = produtos.indexOf(produto);

    setProdutos((antigos) => {
      antigos[posicaoProduto].favoritado = false;

      return antigos;
    });
  }

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    UseConstruirLista()
      .then((produtos) => {
        setProdutos(produtos);
      })
      .then(() => setCarregando(false));
  }, []);

  return (
    <ContextoProdutos.Provider
      value={{
        deveFiltrarFav,
        nomeProduto,
        produtos,
        carregando,
        produtoSelecionado,
        setProdutoSelecionado,
        setCarregando,
        setProdutos,
        setNomeProduto,
        deveFiltrarHandler,
        favoritar,
        desfavoritar,
        aparecerModal,
        setAparecerModal
      }}
    >
      {children}
    </ContextoProdutos.Provider>
  );
};

export default ContextoProdutos;
