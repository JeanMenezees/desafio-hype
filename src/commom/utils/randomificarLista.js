import shuffle from "./shuffle";
import regras from "../../mocks/regras.json";

export async function randomificarListaDeNomes() {
  regras.verbos.permitidos = shuffle(regras.verbos.permitidos);
  regras.adjetivos.permitidos = shuffle(regras.adjetivos.permitidos);


  return regras;
}