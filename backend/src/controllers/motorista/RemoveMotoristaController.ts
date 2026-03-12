import { Request,Response } from "express";
import { RemoveMotoristaService } from "../../services/motorista/RemoveMotoristaService";

class RemoveMotoristasController{
    async handle(req: Request, res: Response){
        const motorista_id = req.query.motorista_id as string;
        const removeMotoristaService = new RemoveMotoristaService();
        const motorista = await removeMotoristaService.execute({
            motorista_id
        })
        return res.json(motorista);
    }
}
export { RemoveMotoristasController }