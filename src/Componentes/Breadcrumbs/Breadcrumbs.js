import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

export default function Breadcrumbs({ isProductPage }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Verifica se está na página inicial ou em uma página de produto e não renderiza o componente se for o caso
  if (pathnames.length === 0 || pathnames[pathnames.length - 1] === "Produto") {
    return null;
  }

  if (!isProductPage && pathnames.length === 0) {
    return null;
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.listinha}>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <span>&gt;</span>
        {pathnames.map((pathname, index) => {
          const url = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={url}>
              <li>
                <Link to={url}>{formatBreadcrumbText(pathname)}</Link>
              </li>
              {index < pathnames.length - 1 && <li> &gt; </li>}{" "}
              {/* Adiciona o símbolo ">" somente se não for o último item */}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

function formatBreadcrumbText(text) {

  // Função para formatar o texto dos breadcrumbs, por exemplo, substituir traços por espaços ou letras maiúsculas
  // Aqui, vou simplesmente capitalizar a primeira letra de cada palavra
  return text.charAt(0).toUpperCase() + text.slice(1);
}
