import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Container, Botao, Input } from "../styleGlobal";
import paleta from "../paleta.json";
import ContextoProdutos from "../contextos/contextoProdutos";
import Estrela_sem from "../assets/icones/Estrela_sem.svg";
import Estrela_com from "../assets/icones/Estrela_com.svg";

const BarraFiltros = () => {
  const contexto = useContext(ContextoProdutos);

  const [selecionado, setSelecionado] = useState(false);

  return (
    <StyledBarraFiltros>
      <StyledBotaoFavoritos
        onClick={(e) => {
          e.preventDefault();

          contexto.setFiltrar(true);

          setSelecionado((antigo) => !antigo);
        }}
        selecionado={selecionado}
      >
        <img
          className="icone__sem__fundo"
          src={selecionado ? Estrela_com : Estrela_sem}
          alt="icone de estrela"
        />
        Favoritos
      </StyledBotaoFavoritos>
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
            contexto.setNome(e.target.value);
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

  position: sticky;
  top: 200px;

  background-color: ${paleta.cores.branco};

  z-index: 999;

  @media (min-width: 1000px) {
    top: calc(100px + 2%);

    padding: 2%;
  }
`;

const StyledBotaoFavoritos = styled(Botao)`
  &:hover{
    border-bottom: 3px solid ${paleta.cores.preto};
  }

  align-items: center;

  transition: 0.2s;

  cursor: pointer;

  font-weight: ${(props) => (props.selecionado ? "bold" : "")};
  color: ${paleta.cores.preto}

  text-align: center;

  width: 30%;
  max-width: 300px

  position: relative;

  border-bottom: ${props => props.selecionado ? `3px solid ${paleta.cores.preto}` : ""};

  .icone__sem__fundo{
    position: absolute;

    animation: ${props => props.selecionado ? `girarEstrela 2s forwards` : ""};

    left: 2%;
  }

  @keyframes girarEstrela {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(360deg);
    }
    100%{
      transform: rotate(0);
    }
  }
`;

const BarraPesquisa = styled.div`
  text-align: right;

  width: 70%;
`;

export default BarraFiltros;
