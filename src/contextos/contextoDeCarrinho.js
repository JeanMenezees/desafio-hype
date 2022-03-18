import React, { useState } from "react";

const ContextoCarrinho = React.createContext();

export const CarrinhoProvider = ({ children }) => {
    const [ carrinho, setCarrinho ] = useState([]);

    return (
        <ContextoCarrinho.Provider
            value={{ carrinho, setCarrinho, qtd_items: carrinho.length }}
        >
            { children }
        </ContextoCarrinho.Provider>
    );
}

export default ContextoCarrinho;