import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import "./Usuarios.css";

function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [editFormData, setEditFormData] = useState({
    user_id: "",
    name: "",
    email: "",
    password: "",
    role: "",
  });

  // Carrega a lista de usuários ao montar o componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar usuários:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao carregar os usuários. Tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchUsers();
  }, [signOut, navigate]);

  // Função para deletar um usuário
  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
      try {
        await api.delete(`/users`, {
          params: { user_id: id },
        });
        setUsers(users.filter((user) => user.id !== id));
        setError(null);
      } catch (err) {
        console.error("Erro ao deletar usuário:", err);
        if (err.response?.status === 401) {
          signOut();
          navigate("/");
        } else {
          setError("Falha ao deletar o usuário. Tente novamente.");
        }
      }
    }
  };

  // Função para abrir o modal de adição
  const handleOpenAddModal = () => {
    setAddFormData({ name: "", email: "", password: "", role: "" });
    setIsAddModalOpen(true);
  };

  // Função para abrir o modal de edição
  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditFormData({
      user_id: user.id,
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
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

  // Função para adicionar um novo usuário
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (
      !addFormData.name ||
      !addFormData.email ||
      !addFormData.password ||
      !addFormData.role
    ) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
    if (!addFormData.email.includes("@")) {
      setError("Email inválido.");
      return;
    }
    try {
      const response = await api.post("/users", addFormData);
      setUsers([...users, response.data]);
      setIsAddModalOpen(false);
      setError(null);
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
      if (err.response?.status === 401) {
        signOut();
        navigate("/");
      } else {
        setError("Falha ao adicionar o usuário. Tente novamente.");
      }
    }
  };

  // Função para atualizar um usuário
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!editFormData.user_id || !editFormData.name || !editFormData.email || !editFormData.role) {
      setError("Nome, email e função são obrigatórios.");
      return;
    }
    if (!editFormData.email.includes("@")) {
      setError("Email inválido.");
      return;
    }
    try {
      const response = await api.put("/users", {
        user_id: editFormData.user_id,
        name: editFormData.name,
        email: editFormData.email,
        password: editFormData.password || undefined, // Envia undefined se password estiver vazio
        role: editFormData.role,
      });
      setUsers(
        users.map((user) =>
          user.id === editFormData.user_id
            ? { ...user, ...response.data }
            : user
        )
      );
      setIsEditModalOpen(false);
      setSelectedUser(null);
      setError(null);
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      if (err.response?.status === 401) {
        signOut();
        navigate("/");
      } else {
        setError(
          err.response?.data?.error || "Falha ao atualizar o usuário. Tente novamente."
        );
      }
    }
  };

  // Função para fechar os modais
  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedUser(null);
    setError(null);
  };

  // Exibe mensagem de carregamento ou erro
  if (loading) return <div className="loading">Carregando usuários...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="usuarios-container">
      <h1>Usuários</h1>
      <button className="action-button add" onClick={handleOpenAddModal}>
        Adicionar Usuário
      </button>
      <table className="usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Criado Em</th>
            <th>Atualizado Em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
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

      {/* Modal para adicionar usuário */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Adicionar Usuário</h2>
            <form onSubmit={handleAddUser}>
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={addFormData.name}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={addFormData.email}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha:</label>
                <input
                  type="password"
                  name="password"
                  value={addFormData.password}
                  onChange={handleAddInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Função:</label>
                <select
                  name="role"
                  value={addFormData.role}
                  onChange={handleAddInputChange}
                  required
                >
                  <option value="">Selecione uma função</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="OPERATOR">OPERATOR</option>
                  <option value="GUARD">GUARD</option>
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

      {/* Modal para atualizar usuário */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar Usuário</h2>
            <form onSubmit={handleUpdateUser}>
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha (opcional):</label>
                <input
                  type="password"
                  name="password"
                  value={editFormData.password}
                  onChange={handleEditInputChange}
                />
              </div>
              <div className="form-group">
                <label>Função:</label>
                <select
                  name="role"
                  value={editFormData.role}
                  onChange={handleEditInputChange}
                  required
                >
                  <option value="">Selecione uma função</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="OPERATOR">OPERATOR</option>
                  <option value="GUARD">GUARD</option>
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

export default Usuarios;