import React, { useContext, useState } from "react";
import styles from "./CartItemCard.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Commom/CartContext";
import { useSubstituicao } from "../../Commom/SubstituicaoContext";

const CartItemCard = ({ item, imgDiretorio }) => {
  const { Traco } = useSubstituicao();
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  const [quantidade, setQuantidade] = useState(item.quantidade || 1);

  const handleQuantidadeChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantidade(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className={styles.card}>
      <Link to={`/${Traco(item.nome)}`}>
        <img src={`${imgDiretorio}${item.nome}.jpg`} alt={item.nome} />
      </Link>
      <div className={styles.info}>
        <p>{item.nome}</p>
        <p>R$ {item.valor}</p>
      </div>
      <div className={styles.selectWrapper}>
        <div className={styles.Seletor}>
          <label>Quantidade:</label>
          <select
            className={styles.select}
            value={quantidade}
            onChange={handleQuantidadeChange}
          >
            {[...Array(10).keys()].map((qtd) => (
              <option key={qtd + 1} value={qtd + 1}>
                {qtd + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className={styles.button}
          onClick={() => removeFromCart(item.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
