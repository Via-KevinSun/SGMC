import { Request,Response } from "express";
import { CreateVeiculoService } from "../../services/veiculos/CreateVeiculoService";

class CreateVeiculoController {
    async handle(req:Request,res:Response){
        const { placa,modelo,motorista_id } = req.body;
        const createVeiculoService = new CreateVeiculoService();
        const veiculo = await createVeiculoService.execute({
            placa,
            modelo,
            motorista_id
        });
        return res.json(veiculo);
    }
}

export { CreateVeiculoController }