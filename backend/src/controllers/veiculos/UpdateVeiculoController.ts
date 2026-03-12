import { Request,Response } from "express";
import { UpdateVeiculoService } from "../../services/veiculos/UpdateVeiculoService";

class UpdateVeiculoController{
    async handle(req:Request,res:Response){
        const {veiculo_id , placa , modelo , motorista_id} = req.body;
        const updateVeiculoService = new UpdateVeiculoService();
        const veiculo = await updateVeiculoService.execute({
            veiculo_id,
            placa,
            modelo, 
            motorista_id
        });
        return res.json(veiculo);
    }
}

export { UpdateVeiculoController }