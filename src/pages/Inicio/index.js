import React, { useContext } from "react";
import Cabecalho from "../../components/Cabecalho";
import BarraDeFiltro from "../../components/BarraDeFiltros";
import ListaProdutos from "../../components/ListaDeProdutos";
import ModalProduto from "../../components/modalProduto";
import ContextoProdutos from "../../contextos/contextoProdutos";

function Inicio() {
  const { aparecerModal } = useContext(ContextoProdutos);
  
  return (
    <>
      {aparecerModal ? <ModalProduto /> : ""}
      <Cabecalho />
      <BarraDeFiltro />
      <ListaProdutos />
    </>
  );
}

export default Inicio;
