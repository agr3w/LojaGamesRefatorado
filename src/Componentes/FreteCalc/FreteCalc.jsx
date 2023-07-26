import React, { useState } from "react";
import axios from "axios";
import styles from "./Frete.module.css";

export default function FreteCalc() {
  const [cep, setCep] = useState("");
  const [valorFrete, setValorFrete] = useState(null);
  const [error, setError] = useState(null);

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const calcularFrete = () => {
    // Removendo caracteres não numéricos do CEP
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setError("Por favor, digite um CEP válido.");
      setValorFrete(null);
      return;
    }

    setError(null);

    // Chama a API ViaCEP para obter os dados do endereço com base no CEP
    axios
      .get(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((response) => {
        if (response.data.erro) {
          setError("CEP não encontrado.");
          setValorFrete(null);
        } else {
          // A API do ViaCEP retorna os dados do endereço no formato JSON
          // Você pode acessar os campos individualmente para obter o valor do frete
          // Vou deixar um exemplo simples apenas para demonstração
          const frete = response.data.uf === "SP" ? 10 : 20; // Valor fixo de frete de R$ 10 para SP e R$ 20 para outros estados
          setValorFrete(frete.toFixed(2));
        }
      })
      .catch((error) => {
        console.error("Erro ao obter dados do frete:", error.message);
        setError("Erro ao calcular o frete.");
        setValorFrete(null);
      });
  };

  return (
    <div className={styles.freteCalc}>
      <h2>Calcule o valor do frete</h2>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleCepChange}
        />
        <button onClick={calcularFrete}>Calcular</button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {valorFrete !== null && <p>Valor do frete: R$ {valorFrete}</p>}
    </div>
  );
}
