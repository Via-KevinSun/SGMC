import { Request,Response } from "express";
import { CreateMovimentacaoService } from "../../services/movimentacao/CreateMovimentacaoService";

class CreateMovimentacaoController {
    async handle(req:Request,res:Response){
        const { tipo,contentor_id,veiculo_id } = req.body;
        const createMovimentacaoService = new CreateMovimentacaoService();
        const movimentacao = await createMovimentacaoService.execute({
            tipo,
            contentor_id,
            veiculo_id
        });
        return res.json(movimentacao);
    }
}

export { CreateMovimentacaoController }