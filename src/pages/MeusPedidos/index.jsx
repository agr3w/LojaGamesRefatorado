import React, { useEffect, useState } from "react";
import { plataformas } from "../../pages/PaginaProduto/index";
import ItemFinal from "../../Componentes/ItemFinal";
import styles from "./meusPedidos.module.css";
import LojaGames from "../../Componentes/Nav";

const MeusPedidos = () => {
  const [itemsConfirmados, setItemsConfirmados] = useState([]);

  useEffect(() => {
    // Buscar os itens confirmados do localStorage ao carregar a página
    const storedItemsConfirmados = JSON.parse(localStorage.getItem("itemsConfirmados"));
    if (storedItemsConfirmados) {
      setItemsConfirmados(storedItemsConfirmados);
    }
  }, []);

  return (
    <>
    <LojaGames />
    <div className={styles.container}>
      <h2 className={styles.title}>Meus Pedidos</h2>
      {itemsConfirmados.length > 0 ? (
        itemsConfirmados.map((item) => (
          <ItemFinal
            key={item.id}
            item={item}
            imgDiretorio={plataformas[item.plataforma].imgDiretorio}
            confirmado={true} // Passa a prop confirmado como true para os itens confirmados
          />
        ))
      ) : (
        <p className={styles.emptyMessage}>Nenhum pedido confirmado.</p>
      )}
    </div>
    </>
  );
};

export default MeusPedidos;
