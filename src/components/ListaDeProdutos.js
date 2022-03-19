import React, { useContext } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { Container } from "../styleGlobal";
import ContextoProdutos from "../contextos/contextoProdutos";
import sem_favoritos from "../assets/icones/sem_favoritos.png";

const ListaProdutos = () => {
  const { carregando, nomeProduto, deveFiltrarFav, produtos } =
    useContext(ContextoProdutos);

  function verficarCarregamento() {
    if (carregando === true) {
      return "";
    }
    if (carregando === false) {
      if (
        deveFiltrarFav === true &&
        !produtos.some((item) => item.favoritado === true)
      ) {
        return (
          <>
            <h1>Ops, você ainda não tem favoritos</h1>
            <img
              className="icone__sem__favoritos"
              src={sem_favoritos}
              alt="icone sem favoritos"
            />
          </>
        );
      } else {
        return produtos.map((item, index) => {
          if (item.nome.toUpperCase().includes(nomeProduto.toUpperCase())) {
            if (deveFiltrarFav && item.favoritado === true) {
              return <Produto key={index} dados={{ ...item }} />;
            }
            if (deveFiltrarFav === false) {
              return <Produto key={index} dados={{ ...item }} />;
            }
          }
        });
      }
    }
  }

  return <StyledListaProdutos>{verficarCarregamento()}</StyledListaProdutos>;
};

const StyledListaProdutos = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: relative;

  @media (min-width: 1000px) {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;

    .icone__sem__favoritos {
      transition: 0.4s;

      position: absolute;

      width: 300px;
      heigth: 300px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default ListaProdutos;
