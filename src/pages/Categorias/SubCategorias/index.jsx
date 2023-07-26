// SubCategoria.js
import React, { useLayoutEffect } from "react";
import { OrdemProvider } from "../../../Commom/OrdemContext";
import { useLocation, useParams } from "react-router-dom";
import RenderNintendo from "./Nintendo";
import RenderPlaystation from "./Playstation";
import RenderXbox from "./Xbox";
import LojaGames from "../../../Componentes/Nav";
import Footer from "../../../Componentes/Footer";

const plataformaComponentMap = {
  Nintendo: RenderNintendo,
  Playstation: RenderPlaystation,
  Xbox: RenderXbox,
};

export default function SubCategoria() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { plataforma } = useParams();
  const Component = plataformaComponentMap[plataforma] || null;

  return (
    <OrdemProvider>
      <LojaGames />
      {Component && <Component />}
      <Footer />
    </OrdemProvider>
  );
}
