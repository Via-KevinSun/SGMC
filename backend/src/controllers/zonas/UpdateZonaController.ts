import { Request,Response } from "express";
import { UpdateZonaService } from "../../services/zonas/UpdateZonaService";

class UpdateZonaController{
    async handle(req:Request,res:Response){
        const {zona_id , nome} = req.body;
        const  updateZonaService = new UpdateZonaService();
        const zona = await updateZonaService.execute({zona_id , nome});
        return res.json(zona);
    }
}

export { UpdateZonaController }