import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Botao, Input } from "../../styleGlobal";
import paleta from "../../paleta.json";
import ContextoProdutos from "../../contextos/contextoProdutos";

const BarraFiltros = () => {

  const contexto = useContext(ContextoProdutos);

  return (
    <StyledBarraFiltros>
      <StyledBotaoFavoritos
        onClick={(e) => {
          e.preventDefault();

          contexto.setFiltrar(true);
        }}
      >Favoritos</StyledBotaoFavoritos>
      <BarraPesquisa>
        <Input
          type="text"
          placeholder="O que você procura?"
          style={{
            borderRadius: "40px",
            width: "50%",
            minWidth: "150px",
          }}
          onChange={(e) => {
            contexto.setNome(e.target.value)
          }}
        />
      </BarraPesquisa>
    </StyledBarraFiltros>
  );
};

const StyledBarraFiltros = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
`;

const StyledBotaoFavoritos = styled(Botao)`
  &:hover{
    border-bottom: 3px solid ${paleta.cores.preto};
  }

  transition: 0.2s;

  cursor: pointer;

  font-weight: bold;
  color: ${paleta.cores.preto}

  text-align: center;

  width: 30%;
  max-width: 300px
`;

const BarraPesquisa = styled.div`
  text-align: right;

  width: 70%;
`;

export default BarraFiltros;
