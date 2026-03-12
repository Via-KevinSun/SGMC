import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar em caso de erro 401
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Movimentacoes.css";

function Movimentacoes() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Carrega a lista de movimentacoes ao montar o componente
  useEffect(() => {
    const fetchMovimentacoes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/movimentacoes");
        setMovimentacoes(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar movimentacoes:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar as Movimentacoes. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchMovimentacoes();
  }, [signOut, navigate]);


  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando movimentacoes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="Movimentacoes-container">
      <h1>Movimentacoes</h1>
      <table className="Movimentacoes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>ID_Contentor</th>
            <th>ID_Veiculo</th>
            <th>Data_Hora</th>
          </tr>
        </thead>
        <tbody>
          {movimentacoes.map((movimentacao, index) => (
            <tr key={movimentacao.id}>
              <td>{index}</td>
              <td>{movimentacao.tipo}</td>
              <td>{movimentacao.contentorId}</td>
              <td>{movimentacao.veiculoId}</td>
              <td>{movimentacao.dataHora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movimentacoes;