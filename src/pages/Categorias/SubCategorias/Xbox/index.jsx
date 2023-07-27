import React from "react";
import { useParams } from "react-router-dom";
import ItensCard from "../../../../Componentes/CardItens";
import Categorias from "../../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../../Arrays/ItensCategorias";

// importando os itens

import { JogosXbox } from "../../../../Arrays/Jogos/TodosXbox/Xbox";
import { JogosXbox360 } from "../../../../Arrays/Jogos/TodosXbox/Xbox-360";
import { JogosXboxOne } from "../../../../Arrays/Jogos/TodosXbox/Xbox-One";
import { JogosXboxSeries } from "../../../../Arrays/Jogos/TodosXbox/XboxSeries";

export default function RenderXbox() {
  const { subcategoria } = useParams();

  const subcategoriasData = {
    "Xbox-Clasic": {
      title: "Xbox-Clasic",
      jogos: JogosXbox,
    },
    "Xbox-360": {
      title: "Xbox-360",
      jogos: JogosXbox360,
    },
    "Xbox-One": {
      title: "Xbox-One",
      jogos: JogosXboxOne,
    },
    "Xbox-Series-X-&-S": {
        title: "Xbox-Series-X-&-S",
        jogos: JogosXboxSeries,
      },
  };

  const subcategoriaData = subcategoriasData[subcategoria] || null;

  return (
    <>
      {subcategoriaData && (
        <>
          <Categorias categorias={categoriasItens} />
          <ItensCard
            jogos={subcategoriaData.jogos}
            imagemDiretorio="/imgs/produtos"
            secaoAtual={subcategoriaData.title}
          />
        </>
      )}
    </>
  );
}
