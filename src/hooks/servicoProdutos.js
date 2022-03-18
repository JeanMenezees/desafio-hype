import { calcular_preco } from "../commom/utils/calculaPrecoProduto";
import { randomificarListaDeNomes } from "../commom/utils/randomificarLista";

export async function UseConstruirLista() {
  return fetch("https://picsum.photos/v2/list?page=2&limit=50")
    .then(async (resposta) => {
      var fotos = await resposta.json();
      var listaCompleta = [];
      const regras = await randomificarListaDeNomes();

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