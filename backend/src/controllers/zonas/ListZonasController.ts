import { Request,Response } from "express";
import { ListZonasService } from "../../services/zonas/ListZonasService";
class ListZonasController{
    async handle(req:Request,res:Response){
        const listZonasService = new ListZonasService();
        const zonas = await listZonasService.execute();
        return res.json(zonas);
    }
}
export { ListZonasController }