import React, { useContext } from "react";
import styled from "styled-components";
import Produto from "./Produto";
import ContextoProdutos from "../contextos/contextoProdutos";

export default function ModalProduto() {
  const { produtoSelecionado, setAparecerModal } = useContext(ContextoProdutos);

  return (
    <StyledModalBackgound>
      <StyledModal>
        <button
          className="fechar__modal"
          onClick={(e) => {
            e.preventDefault();

            setAparecerModal(false);
          }}
        >
          Fechar
        </button>
        <Produto dados={produtoSelecionado} />
      </StyledModal>
    </StyledModalBackgound>
  );
}

const StyledModalBackgound = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  backdrop-filter: blur(1px) opacity(0.7);

  width: 100vw;
  height: 100vh;

  z-index: 999;
`;

const StyledModal = styled.div`
  .fechar__modal {
    color: black;

    width: 100%;

    text-align: right;
    font-weight: bold;
    font-size: 1.2rem;

    border: 0;

    padding: 0 6%;

    background-color: transparent;

    cursor: pointer;
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 50%;
`;
