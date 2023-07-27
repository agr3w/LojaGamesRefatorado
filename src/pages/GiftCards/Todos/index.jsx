import React, { useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItensCard from "../../../Componentes/CardItens";
import Categorias from "../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../Arrays/ItensCategorias";

// Importando os itens
import { OrdemProvider } from "../../../Commom/OrdemContext";
import LojaGames from "../../../Componentes/Nav";
import Footer from "../../../Componentes/Footer";
import { PlaystationCards } from "../../../Arrays/GiftCards/PlaystationCards/PlaystationCards";
import { NintendoCards } from "../../../Arrays/GiftCards/NintendoCards/NintendoCards";
import { XboxCards } from "../../../Arrays/GiftCards/XboxCards/XboxCards";
import { Steam } from "../../../Arrays/GiftCards/Steam/Steam";

export default function RenderGifts() {
  const { categoria } = useParams();

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const subcategoriasData = {
    PlaystationCards: {
      title: "PlaystationCards",
      jogos: PlaystationCards,
    },
    XboxCards: {
      title: "XboxCards",
      jogos: XboxCards,
    },
    NintendoCards: {
      title: "NintendoCards",
      jogos: NintendoCards,
    },
    Steam: {
      title: "Steam",
      jogos: Steam,
    },
  };

  const subcategoriaData = subcategoriasData[categoria] || null;

  return (
    <>
      {subcategoriaData && (
        <OrdemProvider>
          <LojaGames />
          <Categorias categorias={categoriasItens} />
          <ItensCard
            jogos={subcategoriaData.jogos}
            imagemDiretorio="/imgs/produtos"
            secaoAtual={subcategoriaData.title}
          />
          <Footer />
        </OrdemProvider>
      )}
    </>
  );
}
