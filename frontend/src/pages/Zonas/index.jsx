import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar em caso de erro 401
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Zonas.css";

function Zonas() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar carregamento
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext); // Para deslogar em caso de erro 401
  const navigate = useNavigate(); // Para redirecionamento
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState(null);
    const [addFormData, setAddFormData] = useState({
      nome: "",
    });
    const [editFormData, setEditFormData] = useState({
      zona_id: "",
      nome: ""
    });
  

  // Carrega a lista de zonas ao montar o componente
  useEffect(() => {
    const fetchZones = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/zonas");
        setZones(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar zonas:", err);
        if (err.response?.status === 401) {
          // Token inválido ou ausente, deslogar e redirecionar para login
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar os zonas. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchZones();
  }, [signOut, navigate]);

  // Função para deletar uma zona
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar esta zona?")) {
      try {
        await api.delete(`/zonas`, {
          params: {
            zona_id: id,
          },
        }); // Requisição DELETE
        let removeZone = zones.filter((zone) => {
          return zone.id !== id;
        });
        setZones(removeZone);

        setError(null); // Limpa erros
      } catch (err) {
        console.error("Erro ao deletar zona:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao deletar a zona. Tente novamente.");
        }
      }
    }
  };

  // Função para abrir o modal de adição
  const handleOpenAddModal = () => {
    setAddFormData({ nome: "" });
    setIsAddModalOpen(true);
  };

  // Função para abrir o modal de edição
  const handleEdit = (zona) => {
    setSelectedZone(zona);
    setEditFormData({
      zona_id: zona.id,
      nome: zona.nome
    });
    setIsEditModalOpen(true);
  };

  // Função para atualizar os dados do formulário de adição
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para atualizar os dados do formulário de edição
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para adicionar uma nova zona
    const handleAddZone = async (e) => {
      e.preventDefault();
      if (
        !addFormData.nome
      ) {
        setError("Campo nome e obrigatorio.");
        return;
      }
      
      try {
        const response = await api.post("/zonas", addFormData);
        setZones([...zones, response.data]);
        setIsAddModalOpen(false);
        setError(null);
      } catch (err) {
        console.error("Erro ao adicionar zona:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao adicionar a zona. Tente novamente.");
        }
      }
    };

    // Função para atualizar uma zona
      const handleUpdateZone = async (e) => {
        e.preventDefault();
        if (!editFormData.zona_id || !editFormData.nome) {
          setError("ID da Zona e Nome,  são obrigatórios.");
          return;
        }
       
        try {
          const response = await api.put("/zonas", {
            zona_id: editFormData.zona_id,
            nome: editFormData.nome,
          });
          setZones(
            zones.map((zona) =>
              zona.id === editFormData.zona_id
                ? { ...zona, ...response.data }
                : zona
            )
          );
          setIsEditModalOpen(false);
          setSelectedZone(null);
          setError(null);
        } catch (err) {
          console.error("Erro ao atualizar a zona:", err);
          if (err.response?.status === 401) {
            signOut();
            navigate("/");
          } else {
            setError(
              err.response?.data?.error || "Falha ao atualizar a zona. Tente novamente."
            );
          }
        }
      };
    
      // Função para fechar os modais
      const handleCloseModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedZone(null);
        setError(null);
      };

  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando zonas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="Zonas-container">
      <h1>Zonas</h1>
      <button className="action-button add" onClick={handleOpenAddModal}>
        Adicionar Zona
      </button>
      <table className="Zonas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone, index) => (
            <tr key={zone.id}>
              <td>{index}</td>
              <td>{zone.nome}</td>
              <td>
                <button
                  className="action-button edit"
                  onClick={() => handleEdit(zone)}
                >
                  Atualizar
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(zone.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para adicionar zona */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Adicionar Zona</h2>
            <form onSubmit={handleAddZone}>
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={addFormData.nome}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              
              <div className="modal-actions">
                <button type="submit" className="action-button submit">
                  Salvar
                </button>
                <button
                  type="button"
                  className="action-button cancel"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal para atualizar a zona */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar Zona</h2>
            <form onSubmit={handleUpdateZone}>
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={editFormData.nome}
                  onChange={handleEditInputChange}
                  required
                />
              </div>
              
              <div className="modal-actions">
                <button type="submit" className="action-button submit">
                  Salvar
                </button>
                <button
                  type="button"
                  className="action-button cancel"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Zonas;