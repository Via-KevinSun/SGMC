
import { Router, Response, Request } from "express";
import { Role } from "./generated/prisma-client";

import { CreateUserController } from "./controllers/users/CreateUserController";

//Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { hasRole } from "./middlewares/hasRole";
//Controllers
import { AuthUserController } from "./controllers/users/AuthUserController";
import { RemoveUserController } from "./controllers/users/RemoveUserController";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { ListUsersController } from "./controllers/users/ListUsersController";
import { ListContainersController } from "./controllers/contentores/ListContainersController";
import { CreateContainerController } from "./controllers/contentores/CreateContainerController";
import { RemoveContainerController } from "./controllers/contentores/RemoveContainerController";
import { UpdateContainerController } from "./controllers/contentores/UpdateContainerController";
import { ListVeiculosController } from "./controllers/veiculos/ListVeiculosController";
import { CreateVeiculoController } from "./controllers/veiculos/CreateVeiculoController";
import { RemoveVeiculoController } from "./controllers/veiculos/RemoveVeiculoController";
import { UpdateVeiculoController } from "./controllers/veiculos/UpdateVeiculoController";
import { ListMotoristasController } from "./controllers/motorista/ListMotoristasController";
import { CreateMotoristaController } from "./controllers/motorista/CreateMotoristaController";
import { RemoveMotoristasController } from "./controllers/motorista/RemoveMotoristaController";
import { UpdateMotoristaController } from "./controllers/motorista/UpdateMotoristaController";
import { ListZonasController } from "./controllers/zonas/ListZonasController";
import { CreateZonaController } from "./controllers/zonas/CreateZonaController";
import { RemoveZonaController } from "./controllers/zonas/RemoveZonaController";
import { UpdateZonaController } from "./controllers/zonas/UpdateZonaController";
import { ListMovimentacaoController } from "./controllers/movimentacao/ListMovimentacaoController";
import { CreateMovimentacaoController } from "./controllers/movimentacao/CreateMovimentacaoController";
import { RemoveMovimentacaoController } from "./controllers/movimentacao/RemoveMovimentacaoController";
import { UpdateMovimentacaoController } from "./controllers/movimentacao/UpdateMovimentacaoController";
import { ListMovimentacoesController } from "./controllers/movimentacao/ListMovimentacoesController";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {
  // Lança um erro de propósito para testar o express-async-errors;
  throw new Error("Erro ao fazer requisição");
});

//ROTAS DE USUARIO:
//Autenticacao (qualquer User)
router.post("/login", new AuthUserController().handle);
//Criar usuario
router.post("/users",isAuthenticated,hasRole(Role.ADMIN), new CreateUserController().handle);
//Listar usuarios
router.get("/users",isAuthenticated,hasRole(Role.ADMIN), new ListUsersController().handle);
//Deletar usuario
router.delete("/users",isAuthenticated, hasRole(Role.ADMIN), new RemoveUserController().handle);
//Atualizar usuario
router.put("/users",isAuthenticated, hasRole(Role.ADMIN), new UpdateUserController().handle);

//ROTAS DE CONTENTORES:
//Listar contentores
router.get("/contentores",isAuthenticated,hasRole(Role.ADMIN,Role.OPERATOR), new ListContainersController().handle);
//Criar contentores
router.post("/contentores",isAuthenticated,hasRole(Role.ADMIN,Role.OPERATOR), new CreateContainerController().handle);
//Deletar contentores
router.delete("/contentores",isAuthenticated,hasRole(Role.ADMIN), new RemoveContainerController().handle);
//Atualizar contentores
router.put("/contentores",isAuthenticated,hasRole(Role.ADMIN,Role.OPERATOR), new UpdateContainerController().handle);

//ROTAS DE VEICULOS:
//Listar veiculos
router.get("/veiculos", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new ListVeiculosController().handle);
//Criar veiculos
router.post("/veiculos", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new CreateVeiculoController().handle);
//Deletar veiculos
router.delete("/veiculos", isAuthenticated, hasRole(Role.ADMIN), new RemoveVeiculoController().handle);
//Atualizar veiculos
router.put("/veiculos", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new UpdateVeiculoController().handle);

//ROTAS DE MOTORISTAS:
//Listar motoristas
router.get("/motoristas", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new ListMotoristasController().handle);
//Criar motoristas
router.post("/motoristas", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new CreateMotoristaController().handle);
//Deletar motoristas
router.delete("/motoristas", isAuthenticated, hasRole(Role.ADMIN), new RemoveMotoristasController().handle);
//Atualizar motoristas
router.put("/motoristas", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new UpdateMotoristaController().handle);

//ROTAS DE ZONAS:
//Listar zonas
router.get("/zonas",isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new ListZonasController().handle);
//Criar zonas
router.post("/zonas",isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR), new CreateZonaController().handle);
//Deletar zonas
router.delete("/zonas",isAuthenticated, hasRole(Role.ADMIN), new RemoveZonaController().handle);
//Atualizar zonas
router.put("/zonas",isAuthenticated, hasRole(Role.ADMIN), new UpdateZonaController().handle);

//ROTAS DE MOVIMENTACOES
//Listar movimentacao
router.get("/movimentacao", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR,Role.GUARD), new ListMovimentacaoController().handle);
//Listar movimentacoes
router.get("/movimentacoes", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR,Role.GUARD), new ListMovimentacoesController().handle);
//Criar movimentacoes
router.post("/movimentacao", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR,Role.GUARD), new CreateMovimentacaoController().handle);



/*
//Deletar movimentacoes( ESSA ROTA DEVE DEIXAR DE EXISTIR )
router.delete("/movimentacoes", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR,Role.GUARD), new RemoveMovimentacaoController().handle);
//Atualizar movimentacoes( ESSA ROTA DEVE DEIXAR DE EXISTIR )
router.put("/movimentacoes", isAuthenticated, hasRole(Role.ADMIN,Role.OPERATOR,Role.GUARD), new UpdateMovimentacaoController().handle);
*/


export { router };
