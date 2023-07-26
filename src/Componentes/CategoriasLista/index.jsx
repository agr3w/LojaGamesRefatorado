import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./categoriasLista.module.css";
import { categoriasItens, subcategoriasPorCategoria, subcategoriasCor } from "../../Arrays/ItensCategorias";
import { useSubstituicao } from "../../Commom/SubstituicaoContext"; 

export default function Categorias() {
  const location = useLocation();
  const { Traco } = useSubstituicao();

  const getPathName = () => {
    const pathName = location.pathname;
    const lastIndex = pathName.lastIndexOf("/");
    const currentPath = pathName.slice(lastIndex + 1);
    const previousPath = pathName.slice(0, lastIndex);
    const previousLastIndex = previousPath.lastIndexOf("/");
    const previousPathName = previousPath.slice(previousLastIndex + 1);
    return subcategoriasPorCategoria[currentPath] ? currentPath : previousPathName;
  };

  const renderSubcategorias = () => {
    const categoria = getPathName();
    const subcategorias = subcategoriasPorCategoria[categoria];

    return (
      <ul className={styles.subcategoriasList}>
        {subcategorias.map((subcategoria) => (
          <li key={subcategoria}>
            <Link
              to={`/categoria/${Traco(categoria)}/${Traco(subcategoria)}`}
              className={styles.subcategoriaLink}
            >
              {subcategoria}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.categoriasContainer}>
      <h3 className={styles.title} style={{ backgroundColor: subcategoriasCor[`${getPathName()}Cor`] }}>
        {getPathName().toUpperCase()}
      </h3>
      {renderSubcategorias()}
      <ul className={styles.categoriasList}>
        {categoriasItens.map((categoria) => (
          <li key={categoria}>
            {getPathName() !== categoria && (
              <Link
                to={`/categoria/${Traco(categoria)}`}
                className={`${styles.categoriaLink} ${getPathName() === categoria && styles.active}`}
              >
                {categoria.toUpperCase()}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
