import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import Produto from "../../components/Produto";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContextoCarrinho from "../../contextos/contextoDeCarrinho";
import { Botao } from "../../styleGlobal";
import paleta from "../../paleta.json";

const Carrinho = () => {
  const { carrinho, checkout } = useContext(ContextoCarrinho);

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
        {carrinho.map((produto, index) => (
          <Produto key={index} dados={{ ...produto }} carrinho />
        ))}
      </StyledListaCarrinho>
      <StyledSectionCheckout>
        <StyledBotaoCheckout onClick={() => checkout()}>
          Checkout carrinho
        </StyledBotaoCheckout>
      </StyledSectionCheckout>
    </>
  );
};

const StyledListaCarrinho = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1000px) {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
`;

const StyledSectionCheckout = styled(Container)`
  position: fixed;

  padding: 2% 6%;

  bottom: 0;
`

const StyledBotaoCheckout = styled(Botao)`
  background-color: ${paleta.cores.preto};
  color: ${paleta.cores.branco};

  border-radius: 20px;

  cursor: pointer;
`

export default Carrinho;
