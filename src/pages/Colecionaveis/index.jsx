import React, { useLayoutEffect } from "react";
import ItensCard from "../../Componentes/CardItens";
import LojaGames from "../../Componentes/Nav";
import Footer from "../../Componentes/Footer";
import { OrdemProvider } from "../../Commom/OrdemContext";
import Categorias from "../../Componentes/CategoriasLista";
import { useLocation } from "react-router";
import { ColecionaveisArray } from "../../Arrays/Colecionaveis/Colecionaveis";

export default function ColecionaveisPage() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <OrdemProvider>
      <LojaGames />
      <Categorias />
      <ItensCard
        jogos={ColecionaveisArray}
        imagemDiretorio="/imgs/Produtos"
        secaoAtual="colecionaveis"
      />
      <Footer />
    </OrdemProvider>
  );
}
