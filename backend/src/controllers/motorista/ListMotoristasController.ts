import { Request,Response } from "express";
import { ListMotoristasService } from "../../services/motorista/ListMotoristasService";

class ListMotoristasController{
    async handle(req:Request,res:Response){
        const listMotoristasService = new ListMotoristasService();
        const motoristas = await listMotoristasService.execute();
        return res.json(motoristas);
    }
}
export { ListMotoristasController }