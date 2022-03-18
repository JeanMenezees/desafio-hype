import React from "react";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import Produto from "../PaginaInicial/Produto";

const Carrinho = (props) => {
  return (
    <StyledListaCarrinho>
      <h1
        style={{
            margin: "8px 0"
        }}
      >Seu carrinho Carrinho</h1>
      {props.produtos.map((produto) => (<Produto />))}
    </StyledListaCarrinho>
  );
};

const StyledListaCarrinho = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default Carrinho;
