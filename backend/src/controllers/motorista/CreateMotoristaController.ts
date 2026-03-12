import { Request,Response } from "express";
import { CreateMotoristaService } from "../../services/motorista/CreateMotoristaService";

class CreateMotoristaController {
    async handle(req:Request,res:Response){
        const { nome,documento,telefone } = req.body;
        const createMotoristaService = new CreateMotoristaService();
        const motorista = await createMotoristaService.execute({
            nome,
            documento,
            telefone
        });
        return res.json(motorista);
    }
}

export { CreateMotoristaController }