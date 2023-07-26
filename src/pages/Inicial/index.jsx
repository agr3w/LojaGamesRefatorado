import Banner from "./Banner";
import Footer from "../../Componentes/Footer";
import LojaGames from "../../Componentes/Nav";
import Newsletter from "../../Componentes/NewsLetter";
import Products from "./Produtos";
import CarouselCard from "../../Componentes/CarroselCard";
import { Lancamentos } from "../../Arrays/Carrosel/Lancamentos";
import SobreLoja from "../../Componentes/SobreALoja";
import BannerRedesSociais from "../../Componentes/BannerRedesSociais";
import { MaisVendidos } from "../../Arrays/Carrosel/MaisVendidos";
import { useLocation } from "react-router";
import { useLayoutEffect } from "react";

export default function Inicial() {

  const location = useLocation();

  // Scroll to the top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <LojaGames />
      <Banner />
      <Products />
      <CarouselCard items={Lancamentos} titulo="Lançamentos" />
      <SobreLoja />
      <CarouselCard items={MaisVendidos} titulo="Mais vendidos" />
      <BannerRedesSociais />
      <Newsletter />
      <Footer />
    </div>
  );
}
