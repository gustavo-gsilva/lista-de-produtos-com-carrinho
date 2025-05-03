import React, { useState } from "react";
import { useProdutos } from "../../hooks/useProdutos";
import './produtos.css';

function Produtos() {
    const { produtos, quantidades, atualizarQuantidade } = useProdutos();

    const [quantidadeVisivel, setQuantidadeVisivel] = useState(null);

    const toggleQuantidadeVisivel = (id) => {
        setQuantidadeVisivel((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            <ul className="container">
                {produtos.map((produto) => (
                        <li
                            className="container-img" key={produto.id}>
                            <picture>
                                <source media="(max-width: 800px)" srcSet={produto.produtoMobile}></source>
                                <source media="(min-width: 801px)" srcSet={produto.produto}></source>

                                <img
                                    className={`produto ${quantidades[produto.id] > 0 ? 'produto-active' : ''}`} src={produto.produto}>
                                </img>
                            </picture>

                            <div onClick={() => toggleQuantidadeVisivel(produto.id)} className="container-btn">
                                <img src="./assets/images/icon-add-to-cart.svg"></img>

                                <button>Add to Cart</button>
                            </div>

                            {quantidadeVisivel === produto.id && (
                                <div className="container-quantity">
                                    <img onClick={() => atualizarQuantidade(produto.id, Math.max((quantidades[produto.id] || 0) - 1, 0))} className="icon-decrement" src="./assets/images/icon-decrement-quantity.svg"></img>

                                    <span>{quantidades[produto.id] || 0}</span>

                                    <img onClick={() => atualizarQuantidade(produto.id, (quantidades[produto.id] || 0) + 1)}className="icon-increment" src="./assets/images/icon-increment-quantity.svg"></img>
                                </div>
                            )}

                            <div className="container-info">
                                <p className="nome-produto">{produto.nome}</p>
                                <p className="descricao-produto">{produto.descricao}</p>
                                <p className="preco-produto">{`$${produto.preco.toFixed(2)}`}</p>
                            </div>
                        </li>
                ))}
            </ul>
        </>
    )
};

export default Produtos;