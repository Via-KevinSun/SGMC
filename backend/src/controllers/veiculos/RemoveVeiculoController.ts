import { Request,Response } from "express";
import { RemoveVeiculoService } from "../../services/veiculos/RemoveVeiculoService";

class RemoveVeiculoController{
    async handle(req: Request, res: Response){
        const veiculo_id = req.query.veiculo_id as string;
        const removeVeiculoService = new RemoveVeiculoService();
        const veiculo = await removeVeiculoService.execute({
            veiculo_id
        })
        return res.json(veiculo);
    }
}
export { RemoveVeiculoController }