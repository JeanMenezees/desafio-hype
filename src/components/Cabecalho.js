import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Titulo } from "../styleGlobal";
import paleta from "../paleta.json";
import icone from "../assets/icones/icone-carrinho.svg";
import ContextoProdutos from "../contextos/contextoProdutos";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  const contexto = useContext(ContextoProdutos);

  return (
    <StyledCabecalho>
      <Titulo
        style={{
          color: `${paleta.cores.vermelho}`,
          textDecoration: "none",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        Acme inc.
      </Titulo>
      <StyledDivCarrinho>
        <StyledContadorItems>{contexto.qtdItems}</StyledContadorItems>
        <Link to="/carrinho">
          <img
            src={icone}
            alt="Icone carrinho de compras"
            style={{
              padding: "16px",
              borderRadius: "20px",
              backgroundColor: "white",
              zIndex: "999px",
            }}
          />
        </Link>
      </StyledDivCarrinho>
    </StyledCabecalho>
  );
};

const StyledCabecalho = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${paleta.cores.branco};

  position: sticky;
  top: 0;

  z-index: 1;
`;

const StyledDivCarrinho = styled.div`
  position: relative;
`;

const StyledContadorItems = styled.div`
  background-color: ${paleta.cores.vermelho};
  color: ${paleta.cores.branco};

  width: 15px;
  height: 15px;

  padding: 3px;

  border-radius: 50%;

  position: absolute;

  top: -2px;
  right: -1px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Cabecalho;
