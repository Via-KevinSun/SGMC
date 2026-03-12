import React from "react";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import Routes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter> {/* Envolve tudo com BrowserRouter */}
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;