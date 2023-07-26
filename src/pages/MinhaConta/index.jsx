import React, { useEffect, useState } from "react";
import styles from "./MinhaConta.module.css";
import LojaGames from "../../Componentes/Nav";

const MinhaConta = () => {
  const [nome, setNome] = useState(
    localStorage.getItem("nome") || "Nome do Cliente"
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") || "email@cliente.com"
  );
  const [iconePerfil, setIconePerfil] = useState(
    localStorage.getItem("iconePerfil") || "/caminho/para/icon_perfil.png"
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("nome", nome);
  }, [nome]);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  // Function to update the profile icon
  const handleIconePerfilChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setIconePerfil(reader.result);
      localStorage.setItem("iconePerfil", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmChanges = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000); // Hide the confirmation message after 2 seconds
  };

  return (
    <>
      {" "}
      <LojaGames />
      <div className={styles.minhaConta}>
        <h2>Minha Conta</h2>
        <div className={styles.form}>
          <label>
            Nome:
            <input type="text" value={nome} onChange={handleNomeChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Ícone de Perfil:
            <input
              type="file"
              accept="image/*"
              onChange={handleIconePerfilChange}
            />
            <img src={iconePerfil} alt="Ícone de Perfil" />
          </label>
        </div>
        <button className={styles.confirmButton} onClick={handleConfirmChanges}>
          Confirmar Mudanças
        </button>
        <div
          className={`${styles.confirmationMessage} ${
            showConfirmation ? styles.showConfirmation : ""
          }`}
        >
          Mudanças confirmadas!
        </div>
      </div>
    </>
  );
};

export default MinhaConta;
