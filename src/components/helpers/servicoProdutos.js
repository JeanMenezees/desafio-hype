import shuffle from "./shuffle";
import regras from "../../regras.json";

async function randomificarListaDeNomes() {
  regras.verbos.permitidos = shuffle(regras.verbos.permitidos);
  regras.adjetivos.permitidos = shuffle(regras.adjetivos.permitidos);
}

function calcular_preco(nameLength, descrLength) {
  return 10 + nameLength * ((500 - descrLength) / (3 - nameLength));
}

export async function construirLista() {
  randomificarListaDeNomes();

  return fetch("https://picsum.photos/v2/list?page=2&limit=50")
    .then(async (resposta) => {
      var fotos = await resposta.json();
      var listaCompleta = [];

      for (var i = 0; i < regras.verbos.permitidos.length; i++) {
        listaCompleta.push({
          verbo: regras.verbos.permitidos[i],
          adjetivo: regras.adjetivos.permitidos[i],
          favoritado: false,
          nome:
            regras.verbos.permitidos[i] + " " + regras.adjetivos.permitidos[i],
          descricao: "11111111111111111111",
          preco: calcular_preco(
            (regras.verbos.permitidos[i] + regras.adjetivos.permitidos[i])
              .length,
            String("11111111111111111111").length
          ).toFixed(2),
          foto: fotos[i].download_url
        });
      }
      return listaCompleta;
    });
}
