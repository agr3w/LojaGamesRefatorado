import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import styles from "./nav.module.css";
import MenuSelecao from "../MenuSelecao";
import CartIcon from "../CartIcon";

const LojaGames = () => {
  return (
    <div className={styles.background}>
      <nav className={styles.navbar}>
        <NavLink to={"/"} className={styles.logos}>
          <img
            className={styles.navbar__logo_2}
            src="/imgs/logo-controle.png"
            alt="Toggle Menu"
          />
          <div className={styles.navbar__logo}>LojaGames</div>
        </NavLink>
        <div className={styles.navbar__search}>
          <RiSearchLine size={20} className={styles.lupa} />
          <input
            type="text"
            placeholder="Pesquisar..."
            className={styles.search__input}
          />
        </div>
        <div className={styles.navbar__options}>
          <NavLink
            to="https://www.instagram.com/weslley_kampa/"
            className={styles.navbar__option}
          >
            Suporte
          </NavLink>
        </div>

        <div className={styles.navbar__profile}>
          <AiOutlineUser size={40} className={styles.navbar__profile_image} />
          <div className={styles.navbar__dropdown}>
            <Link to="/Minha-conta" className={styles.navbar__dropdown_option}>
              Minha Conta
            </Link>
            <Link to="/Meus-pedidos" className={styles.navbar__dropdown_option}>
              Meus Pedidos
            </Link>
          </div>
        </div>

        <div className={styles.navbar__cart}>
          <CartIcon/>
        </div>
      </nav>
      <MenuSelecao />
    </div>
  );
};

export default LojaGames;
