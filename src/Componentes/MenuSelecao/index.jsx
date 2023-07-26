import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuSelecao.module.css";
import { subcategoriasPorCategoria } from "../../Arrays/ItensCategorias";
import { useSubstituicao } from "../../Commom/SubstituicaoContext";

const MenuSelecao = () => {
  const menuItens = [
    {
      titulo: "Playstation",
      rota: "/categoria/Playstation",
      subcategorias: subcategoriasPorCategoria.Playstation || [],
    },
    {
      titulo: "Xbox",
      rota: "/categoria/Xbox",
      subcategorias: subcategoriasPorCategoria.Xbox || [],
    },
    {
      titulo: "Nintendo",
      rota: "/categoria/Nintendo",
      subcategorias: subcategoriasPorCategoria.Nintendo || [],
    },
    {
      titulo: "Colecionáveis",
      rota: "/categoria/colecionaveis",
      subcategorias: subcategoriasPorCategoria.colecionaveis || [],
    },
    {
      titulo: "GiftCards",
      rota: "/categoria/GiftCards",
      subcategorias: subcategoriasPorCategoria.GiftCards || [],
    },
  ];

  const [showSubMenu, setShowSubMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setShowSubMenu(index);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

    const { Traco } = useSubstituicao();


  return (
    <div className={styles.fundoSelecao}>
      <div className={styles.menuSelecao}>
        {menuItens.map((item, index) => (
          <div
            key={item.titulo}
            className={styles.menuItemContainer}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to={Traco(item.rota)} className={styles.menuItem} >
              {item.titulo}
            </NavLink>
            {showSubMenu === index && item.subcategorias.length > 0 && (
              <div className={styles.subMenu}>
                {item.subcategorias.map((subcategoria) => (
                  <NavLink
                    key={subcategoria}
                    to={`${Traco(item.rota)}/${Traco(subcategoria)}`}
                    className={styles.subMenuItem}
                  >
                    {subcategoria}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSelecao;
