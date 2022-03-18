import React, { useContext } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { Container } from "../styleGlobal";
import ContextoProdutos from "../contextos/contextoProdutos";

const ListaProdutos = () => {
  const { carregando, nomeProduto , deveFiltrarFav, produtos } = useContext(ContextoProdutos);

  function verficarCarregamento() {
    if (carregando === true) {
      return "";
    }
    if (carregando === false) {
      return produtos.map((item, index) => {
        if (item.nome.toUpperCase().includes(nomeProduto.toUpperCase())) {
          if (deveFiltrarFav && item.favoritado === true) {
            return (
              <Produto
                key={index}
                dados={{ ...item }}
              />
            );
          }
          if (deveFiltrarFav === false) {
            return (
              <Produto
                key={index}
                dados={{ ...item }}
              />
            );
          }
        }
      });
    }
  }

  return (
    <StyledListaProdutos>
      {verficarCarregamento()}
    </StyledListaProdutos>
  );
};

const StyledListaProdutos = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 1000px){
    width: 90%;
    margin: 32px auto;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
`;

export default ListaProdutos;
