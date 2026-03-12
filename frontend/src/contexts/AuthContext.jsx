import React, { useState, useEffect, createContext } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedData = localStorage.getItem("@SGMC");
    return storedData
      ? JSON.parse(storedData)
      : { id: "", name: "", email: "", token: "", role: "" };
  });

  useEffect(() => {
    const storedData = localStorage.getItem("@SGMC");
    if (storedData) {
      const { token } = JSON.parse(storedData);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const isAuthenticated = !!user.name;

  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signIn({ email, password }) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      //console.log(response.data);
      const { id, name, token, role} = response.data;
      //convertento o objeto response para salvar no locarStorage(ele nao armazena objetos)
      const data = {
        ...response.data,
      };

      localStorage.setItem("@SGMC", JSON.stringify(data));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
        token,
        role
      });

      setLoadingAuth(false);
    } catch (err) {
      console.log("erro ao acessar: ", err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
  localStorage.removeItem("@SGMC");
  setUser({
    id: "",
    name: "",
    email: "",
    token: ""
  });
}

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loadingAuth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}