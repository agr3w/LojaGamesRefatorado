import React from "react";
import ReactDOM from "react-dom/client";
import Rota from "./routes";
import { CartProvider } from "./Commom/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Rota />
    </CartProvider>
  </React.StrictMode>
);
