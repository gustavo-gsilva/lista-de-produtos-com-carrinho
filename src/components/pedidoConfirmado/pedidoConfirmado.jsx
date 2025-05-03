import { useProdutos } from '../../hooks/useProdutos';
import './pedidoConfirmado.css'

function PedidoConfirmado({ onStartNewOrder }) {
    const { produtosNoCarrinho, valorTotalCarrinho, quantidades } = useProdutos();

    return (
        <>
            <div className="overlay"></div>
            <div className="container-pedido-confirmado">
                <img src="./assets/images/icon-order-confirmed.svg"></img>

                <h2>Order Confirmed</h2>

                <span>We hope you enjoy your food!</span>

                <div className="container-pedido">
                    <div className="lista-do-pedido">
                        <ul>
                            {produtosNoCarrinho.map((produto) => (
                                <li key={produto.id}>
                                    <img src={produto.produto} alt={`Imagem de ${produto.descricao}`}></img>

                                    <div className="informacoes">
                                        <p className="nome-produto">{produto.descricao}</p>

                                        <div>
                                            <p className="unidades">{quantidades[produto.id]}x</p>
                                            <p className="preco-unidade">@ ${produto.preco.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="container-preco-total-unidades">
                                        <p className="preco-total-unidades">${(quantidades[produto.id] * produto.preco).toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="container-total-valor">
                        <h3>Order Total</h3>

                        <p>${valorTotalCarrinho.toFixed(2)}</p>
                    </div>
                </div>

                <div className="container-button">
                    <button onClick={onStartNewOrder}>Start New Order</button>
                </div>
            </div>
        </>
    );
};

export default PedidoConfirmado;