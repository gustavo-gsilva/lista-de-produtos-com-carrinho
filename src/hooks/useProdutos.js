import { useContext } from "react";
import { ProdutosContext } from "../context/ProdutosContext";

export const useProdutos = () => {
  const context = useContext(ProdutosContext);

  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de um ProdutosProvider");
  }

  return context;
};