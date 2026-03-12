import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar em caso de erro 401
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Motoristas.css";

function Motoristas() {
  const [motoristas, setMotoristas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMotoristas = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/motoristas");
        setMotoristas(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar motoristas:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar os motoristas. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchMotoristas();
  }, [signOut, navigate]);

  //Funcao de deletar motorista

  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando motoristas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="Motoristas-container">
      <h1>Motoristas</h1>
      <table className="Motoristas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {motoristas.map((motorista, index) => (
            <tr key={motorista.id}>
              <td>{index}</td>
              <td>{motorista.nome}</td>
              <td>{motorista.documento}</td>
              <td>{motorista.telefone}</td>
              <td>
                <button
                  className="action-button edit"
                  onClick={() => handleEdit(user)}
                >
                  Atualizar
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Motoristas;