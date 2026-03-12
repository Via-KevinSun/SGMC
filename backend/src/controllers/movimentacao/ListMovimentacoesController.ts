import { Request,Response } from "express";
import { ListMovimentacoesService } from "../../services/movimentacao/ListMovimentacoesService";

class ListMovimentacoesController{
    async handle(req:Request,res:Response){
        const listMovimentacoesService = new ListMovimentacoesService;
        const movimentacao = await listMovimentacoesService.execute();
        return res.json(movimentacao);
    }
}
export { ListMovimentacoesController }