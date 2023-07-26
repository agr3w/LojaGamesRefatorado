import React, { useState } from 'react';
import './newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email ou realizar outras ações necessárias

    // Define o estado como inscrito
    setSubscribed(true);
    // Limpa o campo de entrada de e-mail
    setEmail('');
  };

  return (
    <div className="newsletter">
      <h2>Receba nossas novidades</h2>
      <p>Assine nossa newsletter para receber atualizações por e-mail.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Digite seu e-mail"
          required
        />
        <button type="submit">
          {subscribed ? 'Assinado 😃' : 'Assinar'}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
