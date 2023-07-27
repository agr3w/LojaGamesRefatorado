import React, { useContext } from "react";
import { CartContext } from "../../Commom/CartContext";
import styles from "./OrderConfirmation.module.css";
import { plataformas } from "../../pages/PaginaProduto/index";
import ItemFinal from "../../Componentes/ItemFinal";
import FreteCalc from "../../Componentes/FreteCalc/FreteCalc";
import { useNavigate } from "react-router-dom";

const ConfirmacaoPedido = () => {
  const { cartItems, removeFromCart,finalizarPedido } = useContext(CartContext);
  const Navigate = useNavigate();


  // Verifica se o carrinho está vazio
  if (!cartItems || cartItems.length === 0) {
    return <div className={styles.container}>O pedido não existe.</div>;
  }

  const calcularValorTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.valor * item.quantidade;
    }, 0);
  };

  const handleConfirmarPedido = () => {
    finalizarPedido();
    Navigate("/meus-pedidos");
  };


  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <h2>Confirmação do Pedido</h2>
        {cartItems.map((item) => (
          <ItemFinal
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            imgDiretorio={plataformas[item.plataforma].imgDiretorio}
          />
        ))}
        <FreteCalc />
      </div>
      <div className={styles.summaryContainer}>
        <h3>O valor total da compra é: R$ {calcularValorTotal().toFixed(2)}</h3>
        <div className={styles.summary}>
          <button className={styles.confirmButton} onClick={handleConfirmarPedido}>
            Confirmar Pedido
          </button>
        </div>
        <div className={styles.frete}></div>
      </div>
    </div>
  );
};

export default ConfirmacaoPedido;
