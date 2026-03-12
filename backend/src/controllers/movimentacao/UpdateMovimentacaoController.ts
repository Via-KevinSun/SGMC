import { Request,Response } from "express";
import { UpdateMovimentacaoService } from "../../services/movimentacao/UpdateMovimentacaoService";

class UpdateMovimentacaoController{
    async handle(req:Request,res:Response){
        const { movimentacao_id, tipo , contentor_id , veiculo_id } = req.body;
        const updateMovimentacaoService = new UpdateMovimentacaoService();
        const movimentacao = await updateMovimentacaoService.execute({
            movimentacao_id,
            tipo,
            contentor_id,
            veiculo_id 
        });
        return res.json(movimentacao);
    }
}

export { UpdateMovimentacaoController }