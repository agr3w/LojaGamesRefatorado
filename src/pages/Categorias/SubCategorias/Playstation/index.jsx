import React from "react";
import { useParams } from "react-router-dom";
import ItensCard from "../../../../Componentes/CardItens";
import Categorias from "../../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../../Arrays/ItensCategorias";

// importando os itens

import { JogosPS1 } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-1";
import { JogosPS2 } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-2";
import { JogosPS3 } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-3";
import { JogosPS4 } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-4";
import { JogosPS5 } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-5";
import { JogosPSP } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-portable";
import { JogosPSVita } from "../../../../Arrays/Jogos/TodosPlaystation/Playstation-Vita";

export default function RenderPlaystation() {
  const { subcategoria } = useParams();

  const subcategoriasData = {
    "PlayStation-1": {
      title: "PlayStation-1",
      jogos: JogosPS1,
    },
    "PlayStation-2": {
      title: "PlayStation-2",
      jogos: JogosPS2,
    },
    "PlayStation-3": {
      title: "PlayStation-3",
      jogos: JogosPS3,
    },
    "PlayStation-4": {
      title: "PlayStation-4",
      jogos: JogosPS4,
    },
    "PlayStation-5": {
      title: "PlayStation-5",
      jogos: JogosPS5,
    },
    "PlayStation-Portable": {
      title: "PlayStation-Portable",
      jogos: JogosPSP,
    },
    "PlayStation-Vita": {
      title: "PlayStation-Vita",
      jogos: JogosPSVita,
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
            imagemDiretorio="/imgs/Produtos"
            secaoAtual={subcategoriaData.title}
          />
        </>
      )}
    </>
  );
}
