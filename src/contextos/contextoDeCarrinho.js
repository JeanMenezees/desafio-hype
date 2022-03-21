import React, { useState } from "react";

const ContextoCarrinho = React.createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  function checkout() {
    console.log("Carrinho: ", carrinho);
    setCarrinho([]);
  }

  return (
    <ContextoCarrinho.Provider
      value={{ carrinho, setCarrinho, qtd_items: carrinho.length, checkout}}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
};

export default ContextoCarrinho;
