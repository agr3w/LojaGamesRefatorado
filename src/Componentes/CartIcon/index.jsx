import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Carticon.module.css"
import { CartContext } from "../../Commom/CartContext"; // Import the CartContext

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);

  return (
    <div className={styles.cartIcon}>
      <Link to="/carrinho" className={styles.cartLink}>
        <AiOutlineShoppingCart size={30} className={styles.cart__icon} />
        {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
