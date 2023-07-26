import React, { useLayoutEffect } from "react";
import ItensCard from "../../Componentes/CardItens";
import LojaGames from "../../Componentes/Nav";
import Footer from "../../Componentes/Footer";
import { OrdemProvider } from "../../Commom/OrdemContext";
import Categorias from "../../Componentes/CategoriasLista";
import { useLocation } from "react-router";
import { GiftCards } from "../../Arrays/GiftCards/GiftCards";

export default function GiftCardsPage() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <OrdemProvider>
      <LojaGames />
      <Categorias />
      <ItensCard
        jogos={GiftCards}
        imagemDiretorio="/imgs/Produtos"
        secaoAtual="GiftCards"
      />
      <Footer />
    </OrdemProvider>
  );
}
