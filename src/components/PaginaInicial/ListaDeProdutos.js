import React, { useEffect, useState, useReducer, useContext } from "react";
import Produto from "./Produto";
import styled from "styled-components";
import { Container } from "../../styleGlobal";
import ContextoProdutos from "../../contextos/contextoProdutos";
import { v4 as uuidv4 } from "uuid";

function reducer(state, action) {
  switch (action.type) {
    case "construir":
      return { carregando: false };
  }
}

const ListaProdutos = (props) => {
  //Vou receber os produtos
  const [{ carregando }, dispatch] = useReducer(reducer, {
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
      return props.produtos.map((item, index) => {
        if (item.nome.toUpperCase().includes(contexto.nome.toUpperCase())) {
          return (
            <Produto
              key={index}
              dados={{ ...item, foto: fotos[3].download_url }}
            />
          );
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
