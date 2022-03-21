import React, { useContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import paleta from "../paleta.json";
import { Titulo, Texto, Botao } from "../styleGlobal";
import animacao from "../assets/Animacoes/FAV.json";
import { useLottie } from "lottie-react";
import ContextoProdutos from "../contextos/contextoProdutos";
import ContextoCarrinho from "../contextos/contextoDeCarrinho";

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

  var { View, playSegments } = useLottie(animacaoConfig);

  const { favoritar, desfavoritar, setProdutoSelecionado, setAparecerModal } =
    useContext(ContextoProdutos);
  const { setCarrinho } = useContext(ContextoCarrinho);

  useEffect(() => {
    playSegments(animar, true);
  }, [animar]);

  useEffect(() => {
    if (favoritado) {
      playSegments([40, 109], true);
    } else {
      playSegments([40, 41], true);
    }
  }, []);

  return (
    <StyledDivProduto url={props.dados.foto}>
      {props.carrinho ? (
        ""
      ) : (
        <StyledDivAnimacao
          onClick={() => {
            if (favoritado === true) {
              desfavoritar(props.dados.verbo);
            } else {
              favoritar(props.dados.verbo);
            }
            dispatch({ type: "favoritar" });
          }}
        >
          {View}
        </StyledDivAnimacao>
      )}
      <div
        className="foto"
        onClick={() => {
          if(props.carrinho){
            return
          }
          setProdutoSelecionado(props.dados);
          setAparecerModal(true);
        }}
      ></div>
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

            setCarrinho((carrinhoAnterior) => [
              ...carrinhoAnterior,
              {
                id: props.dados.nome,
                nome: props.dados.nome,
                descricao: props.dados.descricao,
                preco: props.dados.preco,
                foto: props.dados.foto,
              },
            ]);
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

  transition: 1s;

  border-radius: 16px;

  max-height: 400px;

  .foto {
    width: 100%;
    height: 200px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-image: url(${(props) => props.url});
    backgroundsize: "cover";
    backgroundrepeat: "no-repeat";
    backgroundposition: "center center";

    transition: 0.4s;

    cursor: pointer;
  }

  .botao__add--carrinho:hover {
    border-bottom: 3px solid ${paleta.cores.preto};
  }
`;

export default Produto;
