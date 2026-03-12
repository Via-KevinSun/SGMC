import { Request,Response } from "express";
import { ListMovimentacaoService } from "../../services/movimentacao/ListMovimentacaoService";

class ListMovimentacaoController{
    async handle(req:Request,res:Response){
        const movimentacao_id = req.query.movimentacao_id as string;
        const listMovimentacaoService = new ListMovimentacaoService();
        const movimentacao = await listMovimentacaoService.execute({
            movimentacao_id
        });
        return res.json(movimentacao);
    }
}
export { ListMovimentacaoController }