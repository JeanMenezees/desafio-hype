import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Titulo } from "../styleGlobal";
import paleta from "../paleta.json";
import icone from "../assets/icones/icone-carrinho.svg";
import ContextoCarrinho from "../contextos/contextoDeCarrinho";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  const { qtd_items } = useContext(ContextoCarrinho);

  return (
    <StyledCabecalho>
      <Link to="/">
        <Titulo
          style={{
            color: `${paleta.cores.vermelho}`,
            textDecoration: "none",
          }}
        >
          Acme inc.
        </Titulo>
      </Link>
      <StyledDivCarrinho>
        <StyledContadorItems>{qtd_items}</StyledContadorItems>
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

  height: 200px;

  position: sticky;
  top: 0;

  z-index: 1;

  @media (min-width: 1000px) {
    height: 100px;

    padding: 2%;
  }
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
