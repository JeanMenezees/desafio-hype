import React from "react";
import styled from "styled-components";

const Carrinho = (props) => {
  return (
    <StyledListaCarrinho>
      <h1
        style={{
            margin: "8px 0"
        }}
      >Seu carrinho Carrinho</h1>
      {props.produtos.map((produto) => {
        return (
            // Produto de carrinho
            // Nome
            // Preco
            // Descricao
            // Quantidade
                // Quantidade vem dos items iguais
                    // Na hora de renderizar ver se ja tem algum com o mesmo id, se sim nao renderiza e conta um no que  ja existe
        );
      })}
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
