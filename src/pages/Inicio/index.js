import React, { useContext, useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import BarraDeFiltro from "../../components/BarraDeFiltros";
import ListaProdutos from "../../components/ListaDeProdutos";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <BarraDeFiltro />
      <ListaProdutos />
    </>
  );
}

export default Inicio;
