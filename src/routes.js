import "./styles/reset.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import NovosJogos from "./pages/NovosJogos";
import CategoriaNintendo from "./pages/Categorias/NovosNintendo";
import CategoriaPlaystation from "./pages/Categorias/NovosPlaystation";
import CategoriaXbox from "./pages/Categorias/NovosXbox";
import SubCategoria from "./pages/Categorias/SubCategorias";
import RenderGifts from "./pages/GiftCards/Todos";
import GiftCardsPage from "./pages/GiftCards";
import RenderColecao from "./pages/Colecionaveis/Todos";
import ColecionaveisPage from "./pages/Colecionaveis";
import { SubstituicaoProvider } from "./Commom/SubstituicaoContext";
import RenderProduto from "./pages/PaginaProduto/render";
import CarrinhoPage from "./pages/Carrinho";
import MinhaConta from "./pages/MinhaConta";
import ConfirmacaoPedido from "./pages/FinalizaçãoDoPedido";
import MeusPedidos from "./pages/MeusPedidos";

export default function Rota() {
  return (
    <>
      <Router>
        <SubstituicaoProvider>
          <Routes>
            <Route path="/" element={<Inicial />} />

            <Route path="/Meus-pedidos" element={<MeusPedidos />} />

            <Route path="/Confirmar-pedido" element={<ConfirmacaoPedido />} />

            <Route path="/Minha-Conta" element={<MinhaConta />} />

            <Route path="/carrinho" element={<CarrinhoPage />} />

            {/* Pagina de games */}

            <Route path="/:produto" element={<RenderProduto />} />

            {/* Colecionaveis */}

            <Route
              path="/categoria/colecionaveis"
              element={<ColecionaveisPage />}
            />
            <Route
              path="/categoria/colecionaveis/:Colecao"
              element={<RenderColecao />}
            />

            {/* GiftCards */}

            <Route path="/categoria/GiftCards" element={<GiftCardsPage />} />
            <Route
              path="/categoria/GiftCards/:categoria"
              element={<RenderGifts />}
            />

            {/* categorias */}

            <Route path="/categoria" element={<NovosJogos />} />
            <Route path="/categoria/Nintendo" element={<CategoriaNintendo />} />
            <Route
              path="/categoria/Playstation"
              element={<CategoriaPlaystation />}
            />
            <Route path="/categoria/Xbox" element={<CategoriaXbox />} />

            {/* subcategorias */}

            <Route
              path="/categoria/:plataforma/:subcategoria"
              element={<SubCategoria />}
            />
          </Routes>
        </SubstituicaoProvider>
      </Router>
    </>
  );
}
