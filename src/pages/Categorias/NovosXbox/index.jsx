import React, { useLayoutEffect } from "react";
import LojaGames from "../../../Componentes/Nav";
import ItensCard from "../../../Componentes/CardItens";
import ItensXbox from "../../../Arrays/Jogos/XboxNovos/ItensXboxNovos";
import { OrdemProvider } from "../../../Commom/OrdemContext";
import Categoria from "../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../Arrays/ItensCategorias";
import { useLocation } from "react-router";
import Footer from "../../../Componentes/Footer";

export default function Novos() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <OrdemProvider>
      <LojaGames />
      <Categoria categorias={categoriasItens} />
      <ItensCard
        jogos={ItensXbox}
        imagemDiretorio="/imgs/Produtos"
        secaoAtual="Xbox"
      />
      <Footer />
    </OrdemProvider>
  );
}
