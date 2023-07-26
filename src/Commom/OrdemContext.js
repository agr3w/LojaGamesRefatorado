import React, { createContext, useState } from "react";

const OrdemContext = createContext();

export function OrdemProvider({ children }) {
  const [ordem, setOrdem] = useState("alfabetica");

  const handleOrdemChange = (novaOrdem) => {
    setOrdem(novaOrdem);
  };

  return (
    <OrdemContext.Provider value={{ ordem, handleOrdemChange }}>
      {children}
    </OrdemContext.Provider>
  );
}

export default OrdemContext;
