import React, { useEffect, useState, useReducer, useContext } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import { construirLista } from "../helpers/random.js";
import regras from "../../regras.json";
import ContextoProdutos from "../../contextos/contextoProdutos";

function reducer(state, action) {
  switch (action.type) {
    case "construir":
      return { listaNomes: construirLista(regras), carregando: false };
  }
}

const ListaProdutos = (props) => {
  const [{ listaNomes, carregando }, dispatch] = useReducer(reducer, {
    listaNomes: [],
    carregando: true,
  });

  const [carregandoFoto, setCarregandoFoto] = useState(true);
  const [fotos, setFotos] = useState({});

  const contexto = useContext(ContextoProdutos);

  function verficarCarregamento(carregamento, carregamentoFoto) {
    if (carregamento === true && carregamentoFoto === true) {
      return "";
    }
    if (carregamento === false && carregamentoFoto === false) {
      return listaNomes.map((nome) => {
        if (
          nome.verbo.includes(contexto.nome) ||
          nome.verbo === contexto.nome ||
          nome.adjetivo.includes(contexto.nome) ||
          nome.adjetivo === contexto.nome
        ) {
          {
            return (
              <Produto
                key={nome.verbo}
                verbo={nome.verbo}
                adjetivo={nome.adjetivo}
                url={fotos[0]}
              />
            );
          }
        }
      });
    }
  }

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=50")
      .then(async (resposta) => {
        var data = await resposta.json();

        return data;
      })
      .then((data) => {
        setFotos(data);
      })
      .then(() => {
        setCarregandoFoto(false);
      });

    dispatch({ type: "construir" });
  }, []);

  return (
    <StyledListaProdutos>
      {verficarCarregamento(carregando, carregandoFoto)}
    </StyledListaProdutos>
  );
};

const StyledListaProdutos = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// Estilo para PC
// width: 90%;
// margin: 32px auto;

// display: grid;

// grid-template-columns: 1fr 1fr 1fr;
// grid-row-gap: 16px;
// grid-column-gap: 16px;

export default ListaProdutos;
