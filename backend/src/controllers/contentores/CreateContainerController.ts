import { Request,Response } from "express";
import { CreateContainerService } from "../../services/contentores/CreateContainerService";
class CreateContainerController{
    async handle(req: Request, res: Response){
        const {codigo, tipo, estado, zona_id } =req.body;
        const createContainerService = new CreateContainerService();

        const container = await createContainerService.execute({
            codigo,
            tipo,
            estado,
            zona_id
        });
        return res.json(container);
    }
}
export { CreateContainerController };