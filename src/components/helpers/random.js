import shuffle from "../helpers/shuffle";

async function randomificarListaDeNomes(lista) {
  lista.verbos.permitidos = shuffle(lista.verbos.permitidos);
  lista.adjetivos.permitidos = shuffle(lista.adjetivos.permitidos);
}

export function construirLista(lista) {

  randomificarListaDeNomes(lista);

  var listaCompleta = [];

  for (var i = 0; i < lista.verbos.permitidos.length; i++) {
    listaCompleta.push({
      verbo: lista.verbos.permitidos[i],
      adjetivo: lista.adjetivos.permitidos[i]
    });
  }

  return listaCompleta;
}
