import React, { createContext, useContext } from "react";

const SubstituicaoContext = createContext();

export function useSubstituicao() {
  return useContext(SubstituicaoContext);
}

export function SubstituicaoProvider({ children }) {
  function Traco(texto) {
    return texto.replace(/ /g, "-");
  }

  return (
    <SubstituicaoContext.Provider value={{ Traco }}>
      {children}
    </SubstituicaoContext.Provider>
  );
}
