import React, { useContext } from "react";
import { CartContext } from "../../Commom/CartContext";
import styles from "./CartSummary.module.css";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  // Função para calcular o valor total do carrinho
  const calcularValorTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.valor * item.quantidade;
    }, 0);
  };

  return (
    <div className={styles.card}>
      <h3>Resumo do Carrinho</h3>
      {cartItems.length > 0 ? (
        <>
          <ul className={styles.itemList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <span>{item.nome}</span>
                <span>R$ {item.valor.toFixed(2)}</span>
                <span>Quantidade: {item.quantidade}</span>
              </li>
            ))}
          </ul>
          <p className={styles.total}>
            Total dos Produtos: R$ {calcularValorTotal().toFixed(2)}
          </p>
          <Link to={"/Confirmar-pedido"}>
            <button className={styles.button}>Finalizar Compra</button>
          </Link>
        </>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default CartSummary;
