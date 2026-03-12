import { Request,Response } from "express";
import { UpdateMotoristaService } from "../../services/motorista/UpdateMotoristaService";

class UpdateMotoristaController{
    async handle(req:Request,res:Response){
        const { motorista_id, nome, documento, telefone } = req.body;
        const updateMotoristaService = new UpdateMotoristaService();
        const motorista = await updateMotoristaService.execute({
            motorista_id,
            nome,
            documento,
            telefone
        });
        return res.json(motorista);
    }
}

export { UpdateMotoristaController }