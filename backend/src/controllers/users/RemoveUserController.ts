import { RemoveUserService } from "../../services/users/RemoveUserService";
import { Request,Response } from "express";

class RemoveUserController{
    async handle(req:Request,res:Response){
        const user_id = req.query.user_id as string;
        const removeUserService = new RemoveUserService();
        const user = await removeUserService.execute({
            user_id
        });
        return res.json(user);
    }
}

export { RemoveUserController }