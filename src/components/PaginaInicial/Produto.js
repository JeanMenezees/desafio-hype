import React, { useContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import paleta from "../../paleta.json";
import { Titulo, Texto, Botao } from "../../styleGlobal";
import animacao from "../../assets/Animacoes/FAV.json";
import { useLottie } from "lottie-react";
import ContextoProdutos from "../../contextos/contextoProdutos";

function reducer(state, action) {
  switch (action.type) {
    case "favoritar":
      return {
        favoritado: state.favoritado === true ? false : true,
        animar: state.favoritado === true ? [40, 41] : [40, 109],
      };
  }
}

const Produto = (props) => {
  const [{ favoritado, animar }, dispatch] = useReducer(reducer, {
    favoritado: props.dados.favoritado,
    animar: [40, 41],
  });

  var animacaoConfig = {
    animationData: animacao,
    loop: false,
    autoplay: false,
  };

  var { View, playSegments, destroy } = useLottie(animacaoConfig);

  const contexto = useContext(ContextoProdutos);

  useEffect(() => {
    playSegments(animar, true);
  }, [animar]);

  useEffect(() => {
    if (favoritado) {
      playSegments([40, 109], true);
      console.log("sou favoritado")
    } else {
      playSegments([40, 41], true);
      console.log("nao sou favoritado")
    }
  }, []);

  return (
    <StyledDivProduto url={props.dados.foto}>
      <StyledDivAnimacao
        onClick={() => {
          if (favoritado === true) {
            contexto.desfavoritar(props.dados.verbo);
          } else {
            contexto.favoritar(props.dados.verbo);
          }
          dispatch({ type: "favoritar" });
        }}
      >
        {View}
      </StyledDivAnimacao>
      <div className="foto"></div>
      <Titulo
        style={{
          textAlign: "center",
          width: "100%",
        }}
      >
        {props.dados.nome}
      </Titulo>
      <Texto>{props.dados.descricao}</Texto>
      <Texto>
        R$
        {props.dados.preco}
      </Texto>
      {props.carrinho ? (
        ""
      ) : (
        <Botao
          className="botao__add--carrinho"
          style={{
            cursor: "pointer",
            transition: "0.2s",
          }}
          onClick={(e) => {
            e.preventDefault();

            contexto.colocarCarrinho({
              id: props.dados.nome,
              nome: props.dados.nome,
              descricao: props.dados.descricao,
              preco: props.dados.preco,
            });
          }}
        >
          Adicionar ao carrinho
        </Botao>
      )}
    </StyledDivProduto>
  );
};

const StyledDivAnimacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  position: absolute;

  bottom: 0px;
  right: 0px;

  cursor: pointer;
`;

const StyledDivProduto = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  position: relative;

  margin: 16px auto;

  padding: 16px;

  transition: 1s;

  border-radius: 16px;

  .foto{
    width: 200px;
    height: 200px;

    border-radius: 8px;
    
   background-image: url(${(props) => props.url});
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   backgroundPosition: "center center",
  }

  .botao__add--carrinho:hover{
    border-bottom: 3px solid ${paleta.cores.preto}
  }
`;

export default Produto;
