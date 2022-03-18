import React from "react";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import Produto from "../PaginaInicial/Produto";

const Carrinho = (props) => {
  return (
    <>
      <h1
        style={{
          padding: "16px",
          fontSize: "2rem",
          maxWidth: "300px"
        }}
      >
        Seu carrinho
      </h1>
      <StyledListaCarrinho>
        {props.carrinho.map((produto) => (
          <Produto dados={{ ...produto }} carrinho />
        ))}
      </StyledListaCarrinho>
    </>
  );
};

const StyledListaCarrinho = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1000px) {
    width: 90%;
    margin: 32px auto;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
`;

export default Carrinho;
