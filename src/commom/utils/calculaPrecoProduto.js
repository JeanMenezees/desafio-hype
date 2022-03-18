export function calcular_preco(nameLength, descrLength) {
  return 10 + nameLength * ((500 - descrLength) / (3 - nameLength));
}
