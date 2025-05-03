import { createContext, useState } from "react";
import produtosData from "../components/produtos/produtosData";

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    const [produtos] = useState(produtosData);
    const [quantidades, setQuantidades] = useState({});

    const atualizarQuantidade = (id, novaQuantidade) => {
        setQuantidades((prevQuantidades) => ({
            ...prevQuantidades,
            [id]: novaQuantidade
        }));
    };

    const totalProdutos = Object.values(quantidades).reduce((total, quantidade) => total + quantidade, 0);

    const valorTotalCarrinho = produtos.reduce(
        (total, produto) => total + (quantidades[produto.id] || 0) * produto.preco, 0
    );

    const produtosNoCarrinho = produtos.filter((produto) => (quantidades[produto.id]) > 0);

    const removerProduto = (id) => {
        setQuantidades((prevQuantidades) => {
            const { [id]: _, ...resto } = prevQuantidades;

            return resto;
        });
    };

    const iniciarNovoPedido = () => {
        setQuantidades({});
    };

    return (
        <ProdutosContext.Provider
            value={{
                produtos,
                quantidades,
                atualizarQuantidade,
                totalProdutos,
                valorTotalCarrinho,
                produtosNoCarrinho,
                removerProduto,
                iniciarNovoPedido
            }}
        >

            {children}
        </ProdutosContext.Provider>
    );
};