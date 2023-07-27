import React, { useContext } from "react";
import { CartContext } from "../../Commom/CartContext";
import CartItemCard from "../CarrinhoCardItem";
import CartSummary from "../CartSummary";
import styles from "./Carrinho.module.css";
import FreteCalc from "../FreteCalc/FreteCalc";
import { plataformas } from "../../pages/PaginaProduto/index";


const Carrinho = () => {
  const { cartItems, removeFromCart  } = useContext(CartContext);

  // Verifica se o carrinho está vazio
  if (!cartItems || cartItems.length === 0) {
    return <div className={styles.container}>O carrinho está vazio.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <h2>Carrinho de Compras</h2>
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            imgDiretorio={plataformas[item.plataforma].imgDiretorio}
          />
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summary}>
          <CartSummary />
        </div>
        <div className={styles.frete}>
          <FreteCalc />
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
