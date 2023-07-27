import React from "react";
import { useParams } from "react-router-dom";
import ItensCard from "../../../../Componentes/CardItens";
import Categorias from "../../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../../Arrays/ItensCategorias";

// importando os itens

import { JogosGameBoy } from "../../../../Arrays/Jogos/TodosNintendo/GameBoy";
import { JogosNES } from "../../../../Arrays/Jogos/TodosNintendo/NES";
import { JogosSNES } from "../../../../Arrays/Jogos/TodosNintendo/SNES";
import { Jogos2DS3DS } from "../../../../Arrays/Jogos/TodosNintendo/3DS-2DS";
import { JogosNintendo64 } from "../../../../Arrays/Jogos/TodosNintendo/Nintendo-64";
import { JogosNintendoDS } from "../../../../Arrays/Jogos/TodosNintendo/Nintendo-DS";
import { JogosWii } from "../../../../Arrays/Jogos/TodosNintendo/Wii";
import { JogosWiiU } from "../../../../Arrays/Jogos/TodosNintendo/Nintendo-Wii-U";
import { JogosGameCube } from "../../../../Arrays/Jogos/TodosNintendo/GameCube";
import { JogosSwitch } from "../../../../Arrays/Jogos/TodosNintendo/Nintendo-Switch";

export default function RenderNintendo() {
  const { subcategoria } = useParams();

  const subcategoriasData = {
    GameBoy: {
      title: "GameBoy",
      jogos: JogosGameBoy,
    },
    NES: {
      title: "NES",
      jogos: JogosNES,
    },
    SNES: {
      title: "SNES",
      jogos: JogosSNES,
    },
    "Nintendo-3DS-&-2DS": {
      title: "Nintendo-3DS-&-2DS",
      jogos: Jogos2DS3DS,
    },
    "Nintendo-64": {
      title: "Nintendo-64",
      jogos: JogosNintendo64,
    },
    "Nintendo-DS": {
      title: "Nintendo-DS",
      jogos: JogosNintendoDS,
    },
    "Nintendo-Wii": {
      title: "Nintendo-Wii",
      jogos: JogosWii,
    },
    "Nintendo-Wii-U": {
      title: "Nintendo-Wii-U",
      jogos: JogosWiiU,
    },
    GameCube: {
      title: "GameCube",
      jogos: JogosGameCube,
    },
    "Nintendo-Switch": {
      title: "Nintendo-Switch",
      jogos: JogosSwitch,
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
