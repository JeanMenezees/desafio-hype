import React from "react";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import Produto from "../PaginaInicial/Produto";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Carrinho = (props) => {
  return (
    <>
      <h1
        style={{
          padding: "16px",
          fontSize: "2rem",
          maxWidth: "300px",
          alignItems: "center"
        }}
      >
        <Link to="/">
          <FiArrowLeft />
        </Link>
        Seu carrinho
      </h1>
      <StyledListaCarrinho>
        {props.carrinho.map((produto, index) => (
          <Produto key={index} dados={{ ...produto }} carrinho />
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
