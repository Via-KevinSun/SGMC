import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar em caso de erro 401
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Veiculos.css";

function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Carrega a lista de usuários ao montar o componente
  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/veiculos");
        setVeiculos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar zonas:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar os veiculos. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchVeiculos();
  }, [signOut, navigate]);

  // Função para deletar um veiculo
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este veiculo?")) {
      try {
        await api.delete(`/veiculos`, {
          params: {
            veiculo_id: id,
          },
        }); // Requisição DELETE
        let removeVeiculo = veiculos.filter((veiculo) => {
          return veiculo.id !== id;
        });
        setVeiculos(removeVeiculo);

        setError(null); // Limpa erros
      } catch (err) {
        console.error("Erro ao deletar veiculo:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao deletar o veiculo. Tente novamente.");
        }
      }
    }
  };

  // Função temporária para o botão Atualizar (a implementar)
  const handleEdit = (veiculo) => {
    alert(`Editar veiculo: ${veiculo.placa} (Funcionalidade a implementar)`);
  };

  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando veiculos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="Veiculos-container">
      <h1>Veiculos</h1>
      <table className="Veiculos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo, index) => (
            <tr key={veiculo.id}>
              <td>{index}</td>
              <td>{veiculo.placa}</td>
              <td>{veiculo.modelo}</td>
              <td>
                <button
                  className="action-button edit"
                  onClick={() => handleEdit(veiculo)}
                >
                  Atualizar
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(veiculo.id)}
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

export default Veiculos;