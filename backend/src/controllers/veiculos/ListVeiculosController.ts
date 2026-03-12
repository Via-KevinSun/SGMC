import { Request,Response } from "express";
import { ListVeiculosService } from "../../services/veiculos/ListVeiculosService";

class ListVeiculosController{
    async handle(req:Request,res:Response){
        const listVeiculosService = new ListVeiculosService();
        const veiculos = await listVeiculosService.execute();
        return res.json(veiculos);
    }
}
export { ListVeiculosController }