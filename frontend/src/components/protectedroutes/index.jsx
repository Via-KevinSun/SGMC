import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

// Componente para proteger rotas com base no role do usuário
function ProtectedRoute({ element, allowedRoles }) {
  const { user } = useContext(AuthContext); // Pega o user do contexto
  const role = user?.role || ""; // Pega o role, fallback para vazio se não existir

  // Verifica se o role do usuário está na lista de roles permitidos
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />; // Redireciona para a página inicial se não permitido
  }

  return element; // Renderiza o componente da rota se permitido
}

export default ProtectedRoute;