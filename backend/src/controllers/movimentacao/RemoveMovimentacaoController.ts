import { Request,Response } from "express";
import { RemoveMovimentacaoService } from "../../services/movimentacao/RemoveMovimentacaoService";

class RemoveMovimentacaoController{
    async handle(req: Request, res: Response){
        const movimentacao_id = req.query.movimentacao_id as string;
        const removeMovimentacaoService = new RemoveMovimentacaoService();
        const movimentacao = await removeMovimentacaoService.execute({
            movimentacao_id
        })
        return res.json(movimentacao);
    }
}
export { RemoveMovimentacaoController }