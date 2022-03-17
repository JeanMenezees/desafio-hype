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
  const animacaoConfig = {
    animationData: animacao,
    loop: false,
    autoplay: false,
  };
  
  const { View, playSegments } = useLottie(animacaoConfig);
  
  const [{ favoritado, animar }, dispatch] = useReducer(reducer, {
    favoritado: false,
    animar: [40, 41],
  });
  
  const [nome, setNome] = useState(props.verbo + " " + props.adjetivo);
  const [descricao, setDescricao] = useState("Lorem Ipsum is simpl");

  const contexto = useContext(ContextoProdutos);
  
  useEffect(() => {
    playSegments(animar, true);
  }, [animar]);
  
  function exibirFiltro(){
    if(contexto.filtrar === true && favoritado === false){
      return ""
    }
    if(contexto.filtrar === true && favoritado === true){
      return <StyledDivProduto url={props.url.download_url}>
      <StyledDivAnimacao
        onClick={() => {
          dispatch({ type: "favoritar" });
        }}
      >
        {View}
      </StyledDivAnimacao>
      <div className="foto"></div>
      <Titulo style={{
        textAlign: "center",
        width: "100%"
      }}>{nome}</Titulo>
      <Texto>{descricao}</Texto>
      <Texto>
        R$
        {calcular_preco(
          nome.split("").length,
          descricao.split("").length
        ).toFixed(2)}
      </Texto>
      <Botao
        className="botao__add--carrinho"
        style={{
          cursor: "pointer",
          transition: "0.2s"
        }}
        onClick={(e) => {
          e.preventDefault();

          contexto.colocarCarrinho(
            {
              id: nome,
              nome: nome,
              descricao: descricao,
              preco: calcular_preco(
                nome.split("").length,
                descricao.split("").length
              ).toFixed(2),
            }
          )
        }}
      >Adicionar ao carrinho</Botao>
    </StyledDivProduto>
    }
    else{
      return <StyledDivProduto url={props.url.download_url}>
      <StyledDivAnimacao
        onClick={() => {
          dispatch({ type: "favoritar" });
        }}
      >
        {View}
      </StyledDivAnimacao>
      <div className="foto"></div>
      <Titulo style={{
        textAlign: "center",
        width: "100%"
      }}>{nome}</Titulo>
      <Texto>{descricao}</Texto>
      <Texto>
        R$
        {calcular_preco(
          nome.split("").length,
          descricao.split("").length
        ).toFixed(2)}
      </Texto>
      <Botao
        className="botao__add--carrinho"
        style={{
          cursor: "pointer",
          transition: "0.2s"
        }}
        onClick={(e) => {
          e.preventDefault();

          contexto.colocarCarrinho(
            {
              id: nome,
              nome: nome,
              descricao: descricao,
              preco: calcular_preco(
                nome.split("").length,
                descricao.split("").length
              ).toFixed(2),
            }
          )
        }}
      >Adicionar ao carrinho</Botao>
    </StyledDivProduto>
    }
  }

  return exibirFiltro();
};

function calcular_preco(nameLength, descrLength) {
  return 10 + nameLength * ((500 - descrLength) / (3 - nameLength));
}


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
