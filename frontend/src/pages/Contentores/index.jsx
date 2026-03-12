import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionar em caso de erro 401
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Contentores.css";

function Contentores() {
  const [containers, setContainers] = useState([]);
  const [zonas, setZonas] = useState([]); // Lista de zonas carregadas do back-end
  const [loading, setLoading] = useState(true); // Estado para controlar carregamento
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext); // Para deslogar em caso de erro 401
  const navigate = useNavigate(); // Para redirecionamento
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [addFormData, setAddFormData] = useState({
    codigo: "",
    tipo: "",
    estado: "",
    zona_id: "",
  });
  const [editFormData, setEditFormData] = useState({
    container_id: "",
    codigo: "",
    tipo: "",
    estado: "",
  });

  // Carrega a lista de usuários ao montar o componente
  useEffect(() => {
    const fetchContainers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/contentores");
        setContainers(response.data);
        const zonasResponse = await api.get("/zonas");
        setZonas(zonasResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar contentores:", err);
        if (err.response?.status === 401) {
          // Token inválido ou ausente, deslogar e redirecionar para login
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar os contentores. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchContainers();
  }, [signOut, navigate]);

  // Função para deletar um contentor
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este contentor?")) {
      try {
        await api.delete(`/contentores`, {
          params: {
            container_id: id,
          },
        }); // Requisição DELETE
        let removeContainer = containers.filter((container) => {
          return container.id !== id;
        });
        setContainers(removeContainer);

        setError(null); // Limpa erros
      } catch (err) {
        console.error("Erro ao deletar contentor:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao deletar o contentor. Tente novamente.");
        }
      }
    }
  };

  // Função para abrir o modal de adição
  const handleOpenAddModal = () => {
    setAddFormData({ codigo: "", tipo: "", estado: "", zona_id: "" });
    setIsAddModalOpen(true);
  };

  // Função para abrir o modal de edição
  const handleEdit = (container) => {
    setSelectedContainer(container);
    setEditFormData({
      container_id: container.id,
      codigo: container.codigo,
      tipo: container.tipo,
      estado: container.estado,
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

  // Função para adicionar um novo container
  const handleAddContainer = async (e) => {
    e.preventDefault();
    if (
      !addFormData.codigo ||
      !addFormData.tipo ||
      !addFormData.estado ||
      !addFormData.zona_id
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await api.post("/contentores", addFormData);
      setContainers([...containers, response.data]);
      setIsAddModalOpen(false);
      setError(null);
    } catch (err) {
      console.error("Erro ao adicionar contentor:", err);
      if (err.response?.status === 401) {
        signOut();
        navigate("/");
      } else {
        setError("Falha ao adicionar o contentor. Tente novamente.");
      }
    }
  };

  // Função para atualizar um contentor
  const handleUpdateContainer = async (e) => {
    e.preventDefault();
    if (
      !editFormData.container_id ||
      !editFormData.codigo ||
      !editFormData.tipo ||
      !editFormData.estado
    ) {
      setError("id, codigo, tipo e estado são obrigatórios.");
      return;
    }

    try {
      const response = await api.put("/contentores", {
        container_id: editFormData.container_id,
        codigo: editFormData.codigo,
        tipo: editFormData.tipo,
        estado: editFormData.estado,
      });
      setContainers(
        containers.map((container) =>
          container.id === editFormData.container_id
            ? { ...container, ...response.data }
            : container
        )
      );
      setIsEditModalOpen(false);
      setSelectedContainer(null);
      setError(null);
    } catch (err) {
      console.error("Erro ao atualizar contentor:", err);
      if (err.response?.status === 401) {
        signOut();
        navigate("/");
      } else {
        setError(
          err.response?.data?.error ||
            "Falha ao atualizar o contentor. Tente novamente."
        );
      }
    }
  };

  // Função para fechar os modais
  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedContainer(null);
    setError(null);
  };

  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando contentores...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="Contentores-container">
      <h1>Contentores</h1>
      <button className="action-button add" onClick={handleOpenAddModal}>
        Adicionar Contentor
      </button>
      <table className="Contentores-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Codigo</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Zona</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container, index) => (
            <tr key={container.id}>
              <td>{index}</td>
              <td>{container.codigo}</td>
              <td>{container.tipo}</td>
              <td>{container.estado}</td>
              <td>
                {zonas.find((zona) => zona.id === container.zonaId)?.nome ||
                  "Sem zona"}
              </td>
              <td>
                <button
                  className="action-button edit"
                  onClick={() => handleEdit(container)}
                >
                  Atualizar
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(container.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDITANDO O MODAL */}
      {/* Modal para adicionar usuário */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Adicionar Contentor</h2>
            <form onSubmit={handleAddContainer}>
              <div className="form-group">
                <label>Codigo:</label>
                <input
                  type="text"
                  name="codigo"
                  value={addFormData.codigo}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tipo:</label>
                <select
                  name="tipo"
                  value={addFormData.tipo}
                  onChange={handleAddInputChange}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="PES_20">PES_20</option>
                  <option value="PES_40">PES_40</option>
                  <option value="REEFER">REEFER</option>
                  <option value="TANQUE">TANQUE</option>
                </select>
              </div>
              <div className="form-group">
                <label>Estado:</label>
                <select
                  name="estado"
                  value={addFormData.estado}
                  onChange={handleAddInputChange}
                  required
                >
                  <option value="">Selecione o estado</option>
                  <option value="VAZIO">VAZIO</option>
                  <option value="CHEIO">CHEIO</option>
                </select>
              </div>
              <div className="form-group">
                <label>Zona:</label>
                <select
                  name="zona_id"
                  value={addFormData.zona_id}
                  onChange={handleAddInputChange}
                  required
                >
                  <option value="">Selecione a zona</option>
                  {zonas.map((zona) => (
                    <option key={zona.id} value={zona.id}>
                      {zona.nome}
                    </option>
                  ))}
                </select>
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

      {/* Modal para atualizar contentor */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar Contentor</h2>
            <form onSubmit={handleUpdateContainer}>
              <div className="form-group">
                <label>Código:</label>
                <input
                  type="text"
                  name="codigo"
                  value={editFormData.codigo}
                  onChange={handleEditInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tipo:</label>
                <select
                  name="tipo"
                  value={editFormData.tipo} // Corrigido de addFormData para editFormData
                  onChange={handleEditInputChange} // Corrigido de handleAddInputChange
                  required
                >
                  <option value="">Selecione o tipo</option>
                  <option value="PES_20">PES_20</option>
                  <option value="PES_40">PES_40</option>
                  <option value="REEFER">REEFER</option>
                  <option value="TANQUE">TANQUE</option>
                </select>
              </div>
              <div className="form-group">
                <label>Estado:</label>
                <select
                  name="estado"
                  value={editFormData.estado} // Corrigido de addFormData para editFormData
                  onChange={handleEditInputChange} // Corrigido de handleAddInputChange
                  required
                >
                  <option value="">Selecione o estado</option>
                  <option value="VAZIO">VAZIO</option>
                  <option value="CHEIO">CHEIO</option>
                </select>
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

export default Contentores;
