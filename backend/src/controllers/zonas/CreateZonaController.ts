import { Request,Response } from "express";
import { CreateZonaService } from "../../services/zonas/CreateZonaService";

class CreateZonaController {
    async handle(req:Request,res:Response){
        const { nome } = req.body;
        const createZonaService = new CreateZonaService();
        const zona = await createZonaService.execute({
            nome
        });
        return res.json(zona);
    }
}

export { CreateZonaController }