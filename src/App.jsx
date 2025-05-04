import React, { useContext, useState } from 'react';
import './index.css';
import Produtos from './components/produtos/produtos';
import Carrinho from './components/carrinho/carrinho';
import PedidoConfirmado from './components/pedidoConfirmado/pedidoConfirmado';
import { ProdutosContext } from './context/ProdutosContext';

function App() {
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

    const { iniciarNovoPedido } = useContext(ProdutosContext);

    const handleConfirmOrder = () => {
        setPedidoConfirmado(true);
        
        document.body.style.overflow = 'hidden';
    };

    const handleStartNewOrder = () => {
        setPedidoConfirmado(false);
        iniciarNovoPedido();

        document.body.style.overflow = 'auto';
    };

    return (
        <div className="app-container">
            <div>
                <h2 className="titulo-produtos">Desserts</h2>

                <Produtos />
            </div>

            <Carrinho onConfirmOrder={handleConfirmOrder} />

            {pedidoConfirmado && (
                <div>
                    <PedidoConfirmado onStartNewOrder={handleStartNewOrder} />
                </div>
            )}
        </div>
    );
};

export default App;