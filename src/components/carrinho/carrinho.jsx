import { useProdutos } from '../../hooks/useProdutos';
import './carrinho.css';

function Carrinho({ onConfirmOrder }) {
    const { produtosNoCarrinho, valorTotalCarrinho, totalProdutos, removerProduto, quantidades } = useProdutos();

    return (
        <>
            {produtosNoCarrinho.length > 0 ? (
                <div className="container-carrinho">

                    <h2 className="carrinho">Your Cart ({totalProdutos})</h2>

                    <ul className="lista-produto-carrinho">
                        {produtosNoCarrinho.map((produto) => (
                            <li key={produto.id}>
                                <p className="nome-produto">{produto.descricao}</p>

                                <div className="informacoes-carrinho">
                                    <p className="unidades">{quantidades[produto.id]}x</p>
                                    <p className="preco-unidade">@{produto.preco.toFixed(2)}</p>
                                    <p className="preco-total-unidade">${(quantidades[produto.id] * produto.preco).toFixed(2)}</p>

                                    <img
                                        className="icon-remove" src="./assets/images/icon-remove-item.svg"
                                        onClick={() => removerProduto(produto.id)}>
                                    </img>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="container-valor-total">
                        <h3>Order Total</h3>
                        <h2>${valorTotalCarrinho.toFixed(2)}</h2>
                    </div>

                    <div className="container-carbon-neutral">
                        <img src="./assets/images/icon-carbon-neutral.svg"></img>

                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>

                    <button onClick={onConfirmOrder} className="btn-confirm">Confirm Order</button>
                </div>
            ) : (
                <div className="container-carrinho-vazio">
                    <h2 className="carrinho">Your Cart ({totalProdutos})</h2>

                    <div>
                        <img src="./assets/images/illustration-empty-cart.svg" alt="Ilustração de carrinho vazio" />

                        <p>Your added items will appear here</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Carrinho;