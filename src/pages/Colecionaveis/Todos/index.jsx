<<<<<<< HEAD
import React, { useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItensCard from "../../../Componentes/CardItens";
import Categorias from "../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../Arrays/ItensCategorias";

// Importando os itens
import ConsolesAntigos from "../../../Arrays/Colecionaveis/ConsolesAntigos/ConsolesAntigos";
import Colecionador from "../../../Arrays/Colecionaveis/VersãoDeColecionador/Colecionador";
import JogosAntigos from "../../../Arrays/Colecionaveis/JogosAntigos/JogosAntigos";
import { OrdemProvider } from "../../../Commom/OrdemContext";
import LojaGames from "../../../Componentes/Nav";
import Footer from "../../../Componentes/Footer";

export default function RenderColecao() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { Colecao } = useParams();

  const subcategoriasData = {
    "Consoles-Antigos": {
      title: "Consoles-Antigos",
      jogos: ConsolesAntigos,
    },
    "Edicoes-De-Colecionador": {
      title: "Edicoes-De-Colecionador",
      jogos: Colecionador,
    },
    "Jogos-Antigos": {
      title: "Jogos-Antigos",
      jogos: JogosAntigos,
    },
  };

  const subcategoriaData = subcategoriasData[Colecao] || null;

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
=======
import React, { useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItensCard from "../../../Componentes/CardItens";
import Categorias from "../../../Componentes/CategoriasLista";
import { categoriasItens } from "../../../Arrays/ItensCategorias";

// Importando os itens
import ConsolesAntigos from "../../../Arrays/Colecionaveis/ConsolesAntigos/ConsolesAntigos";
import Colecionador from "../../../Arrays/Colecionaveis/VersãoDeColecionador/Colecionador";
import JogosAntigos from "../../../Arrays/Colecionaveis/JogosAntigos/JogosAntigos";
import { OrdemProvider } from "../../../Commom/OrdemContext";
import LojaGames from "../../../Componentes/Nav";
import Footer from "../../../Componentes/Footer";

export default function RenderColecao() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { Colecao } = useParams();

  const subcategoriasData = {
    "Consoles-Antigos": {
      title: "Consoles-Antigos",
      jogos: ConsolesAntigos,
    },
    "Edicoes-De-Colecionador": {
      title: "Edicoes-De-Colecionador",
      jogos: Colecionador,
    },
    "Jogos-Antigos": {
      title: "Jogos-Antigos",
      jogos: JogosAntigos,
    },
  };

  const subcategoriaData = subcategoriasData[Colecao] || null;

  return (
    <>
      {subcategoriaData && (
        <OrdemProvider>
          <LojaGames />
          <Categorias categorias={categoriasItens} />
          <ItensCard
            jogos={subcategoriaData.jogos}
            imagemDiretorio="/imgs/Produtos"
            secaoAtual={subcategoriaData.title}
          />
          <Footer />
        </OrdemProvider>
      )}
    </>
  );
}
>>>>>>> 7005dc59e92d5b6aa4f84e684ab0d38593522b65
