import { Request,Response } from "express";
import { UpdateContainerService } from "../../services/contentores/UpdateContainerService";

class UpdateContainerController{
    async handle( req:Request, res:Response){
        const {container_id, codigo, tipo, estado} = req.body;
        const uptateContainerService = new UpdateContainerService();
        const container = await uptateContainerService.execute({
            container_id,
            codigo,
            tipo,
            estado
        })
        return res.json(container);
    }
}
export { UpdateContainerController }