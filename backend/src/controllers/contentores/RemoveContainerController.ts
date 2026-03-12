import { Request,Response } from "express";
import { RemoveContainerService } from "../../services/contentores/RemoveContainerService";

class RemoveContainerController{
    async handle(req: Request, res: Response){
        const container_id = req.query.container_id as string;
        const removeContainerService = new RemoveContainerService();
        const container = await removeContainerService.execute({
            container_id
        })
        return res.json(container);
    }
}
export { RemoveContainerController }