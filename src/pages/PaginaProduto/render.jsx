import React, { useLayoutEffect } from "react";
import LojaGames from "../../Componentes/Nav";
import PaginaProduto from ".";
import Footer from "../../Componentes/Footer";
import { useLocation } from "react-router";

export default function RenderProduto() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <LojaGames />
      <PaginaProduto />
      <Footer />
    </>
  );
}
