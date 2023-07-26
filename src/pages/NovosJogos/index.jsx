import React, { useLayoutEffect } from "react";
import ItensCard from "../../Componentes/CardItens";
import ItensNovos from "../../Arrays/ItensNovos";
import BannerSelecao from "./BannerSelecao";
import LojaGames from "../../Componentes/Nav";
import Footer from "../../Componentes/Footer";
import { OrdemProvider } from "../../Commom/OrdemContext";
import { useLocation } from "react-router";

export default function Venda() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <OrdemProvider>
      <LojaGames />
      <BannerSelecao />
      <ItensCard
        jogos={ItensNovos}
        imagemDiretorio="/imgs/Produtos"
      />
      <Footer />
    </OrdemProvider>
  );
}
