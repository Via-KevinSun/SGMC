import { Request,Response } from "express";
import { RemoveZonaService } from "../../services/zonas/RemoveZonaService";

class RemoveZonaController{
    async handle(req: Request, res: Response){
        const zona_id = req.query.zona_id as string;
        const removeZonaService = new RemoveZonaService();
        const zona = await removeZonaService.execute({
            zona_id
        })
        return res.json(zona);
    }
}
export { RemoveZonaController }