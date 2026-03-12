import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  async function handleLogin() {
    if (email === '' || password === '') {
      return;
    }
    await signIn({email,password});
  }
  async function handleKeyDown(event) {
    if (event.key === 'Enter') {
      if (email === '' || password === '') {
        return;
      }
      await signIn({email,password});
    }
  };

  return (
    <div>

      <div>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button onClick={handleLogin}>
        Acessar
      </button>
    </div>
  );
}
