import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import Contentores from "../pages/Contentores";
import Veiculos from "../pages/Veiculos"; 
import Motoristas from "../pages/Motoristas";
import Zonas from "../pages/Zonas"; 
import Movimentacoes from "../pages/Movimentacoes";
import ProtectedRoute from "../components/protectedroutes";

function AppRoutes() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute element={<Usuarios />} allowedRoles={["ADMIN"]} />
            }
          />
          <Route
            path="/contentores"
            element={
              <ProtectedRoute
                element={<Contentores />}
                allowedRoles={["ADMIN", "OPERATOR"]}
              />
            }
          />
          <Route
            path="/veiculos"
            element={
              <ProtectedRoute
                element={<Veiculos />}
                allowedRoles={["ADMIN", "OPERATOR"]}
              />
            }
          />
          <Route
            path="/motoristas"
            element={
              <ProtectedRoute
                element={<Motoristas />}
                allowedRoles={["ADMIN", "OPERATOR"]}
              />
            }
          />
          <Route
            path="/zonas"
            element={
              <ProtectedRoute
                element={<Zonas />}
                allowedRoles={["ADMIN", "OPERATOR"]}
              />
            }
          />
          <Route
            path="/movimentacoes"
            element={
              <ProtectedRoute
                element={<Movimentacoes />}
                allowedRoles={["ADMIN", "GUARD"]}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
