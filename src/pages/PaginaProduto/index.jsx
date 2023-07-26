import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useSubstituicao } from "../../Commom/SubstituicaoContext";
import styles from "./PaginaProduto.module.css";
import FreteCalc from "../../Componentes/FreteCalc/FreteCalc";
import ParcelasDisponiveis from "../../Componentes/ParcelasDisp";
import DescricaoProduto from "../../Componentes/DescricaoProduto";
import { CartContext } from "../../Commom/CartContext";
import { Produtos } from "../../Arrays/ArrayProdutos";

export const plataformas = {
  Nintendo: {
    lista: Produtos,
    imgDiretorio: "/imgs/Produtos/",
  },
  Playstation: {
    lista: Produtos,
    imgDiretorio: "/imgs/Produtos/",
  },
  Xbox: {
    lista: Produtos,
    imgDiretorio: "/imgs/Produtos/",
  },
  Colecionador: {
    lista: Produtos,
    imgDiretorio: "/imgs/Produtos/",
  },
  GiftCards: {
    lista: Produtos,
    imgDiretorio: "/imgs/Produtos/",
  },};

export default function PaginaProduto() {
  const { produto } = useParams();
  const { Traco } = useSubstituicao();

  // Função para encontrar o produto pelo nome na lista
  const encontrarProduto = (nomeProduto, lista) => {
    return lista.find((item) => `${Traco(item.nome)}` === nomeProduto);
  };

  // Verificar em todas as plataformas
  let produtoEncontrado = null;
  for (const plataforma in plataformas) {
    produtoEncontrado = encontrarProduto(
      produto,
      plataformas[plataforma].lista
    );
    if (produtoEncontrado) break;
  }

  const { cartItems, addToCart } = useContext(CartContext);
  const [quantidade, setQuantidade] = useState(1); // Estado local para controlar a quantidade


  const handleAddToCart = () => {
    addToCart({ ...produtoEncontrado, quantidade });
  };

  const handleQuantidadeChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantidade(newQuantity);
  };
  

  return (
    <div className={styles.container}>
      {produtoEncontrado ? (
        <div className={styles.ContainerProducts}>
          <div className={styles.product}>
            <div className={styles.productDetails}>
              <img
                src={
                  produtoEncontrado.plataforma &&
                  `${plataformas[produtoEncontrado.plataforma].imgDiretorio}${
                    produtoEncontrado.nome
                  }.jpg`
                }
                alt={produtoEncontrado.nome}
              />
              <h1>{produtoEncontrado.nome}</h1>
              <span className={styles.productDetailsSpan}>R$ {produtoEncontrado.valor}</span>
            </div>
            <div className={styles.grid}>
              <div className={styles.productDetails}>
                <div className={styles.MetodoPagamento}>
                  <div className={styles.pagamento}>
                    <div className={styles.pagamentoCredito}>
                      <span>Cartão e Crédito</span>
                    </div>
                    <div className={styles.ParcelasDisponiveis}>
                      <ParcelasDisponiveis
                        parcelas={produtoEncontrado.parcela}
                        valor={produtoEncontrado.valor}
                      />
                    </div>
                    <div className={styles.boleto}>
                      <span>Boleto 10% off</span>
                      <span>
                        R$ {produtoEncontrado.valor -
                          produtoEncontrado.valor * 0.1} 
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productDetailsLeft}>
              <div className={styles.quantidadeWrapper}>
                <label>Quantidade:</label>
                <select
                  className={styles.quantidadeSelect}
                  value={quantidade}
                  onChange={handleQuantidadeChange}
                >
                  {[...Array(10).keys()].map((qtd) => (
                    <option key={qtd + 1} value={qtd + 1}>
                      {qtd + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={handleAddToCart}>Comprar</button>
            </div>

            </div>
          </div>
          <div className={styles.frete}>
            <FreteCalc />
          </div>
        </div>
      ) : (
        <div className={styles["not-found"]}>
          <h1>Produto não encontrado</h1>
        </div>
      )}
      <div className={styles.descricao_container}>
        {produtoEncontrado && (
          <DescricaoProduto
            descricao={produtoEncontrado.descricao}
            desenvolvedora={produtoEncontrado.desenvolvedora}
            publicadora={produtoEncontrado.publicadora}
            console={produtoEncontrado.console}
            dataLancamento={produtoEncontrado.dataLancamento}
            genero={produtoEncontrado.genero}
            idiomas={produtoEncontrado.idiomas}
            legendas={produtoEncontrado.legendas}
            idadeRecomendada={produtoEncontrado.idadeRecomendada}
            numJogadoresOffline={produtoEncontrado.numJogadoresOffline}
            numJogadoresOnline={produtoEncontrado.numJogadoresOnline}
            resolucao={produtoEncontrado.resolucao}
          />
        )}
      </div>
    </div>
  );
}
