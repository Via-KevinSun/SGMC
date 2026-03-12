import React, { useContext, useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

// Componente SideBar
const SideBar = () => {
  const { user } = useContext(AuthContext); // Pega o user do contexto (inclui role)
  const role = user?.role || ""; // Pega o role, fallback para vazio se não existir
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para controlar visibilidade

  // Define os itens da SideBar baseados no role (fácil de manter: adicione/editar aqui)
  let menuItems = [];

  if (role === "ADMIN") {
    menuItems = [
      { label: "Usuários", path: "/usuarios" },
      { label: "Contentores", path: "/contentores" },
      { label: "Veículos", path: "/veiculos" },
      { label: "Motoristas", path: "/motoristas" },
      { label: "Zonas", path: "/zonas" },
      { label: "Movimentações", path: "/movimentacoes" },
    ];
  } else if (role === "OPERATOR") {
    menuItems = [
      { label: "Contentores", path: "/contentores" },
      { label: "Veículos", path: "/veiculos" },
      { label: "Motoristas", path: "/motoristas" },
      { label: "Zonas", path: "/zonas" },
    ];
  } else if (role === "GUARD") {
    menuItems = [
      { label: "Movimentações", path: "/movimentacoes" },
    ];
  }

  // Função para alternar visibilidade da SideBar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      {/* Botão de toggle fora da SideBar para acessibilidade */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Esconder SideBar" : "Mostrar SideBar"}
      >
        {isSidebarOpen ? "◄" : "►"}
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <span className="label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;