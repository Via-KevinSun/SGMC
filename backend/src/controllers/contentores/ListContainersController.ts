import { Request,Response } from "express";
import { ListContainersService } from "../../services/contentores/ListContainersService";

class ListContainersController{
    async handle(req:Request,res:Response){
        const listContainersService = new ListContainersService();
        const containers = await listContainersService.execute();
        return res.json(containers)
    }
}
export { ListContainersController }