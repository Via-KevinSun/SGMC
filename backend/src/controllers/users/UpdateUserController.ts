import { UpdateUserService } from "../../services/users/UpdateUserService";
import { Request,Response } from "express";

class UpdateUserController{
    async handle(req:Request , res:Response){
        const { user_id, name, password, role} = req.body;
        const updateUserService = new UpdateUserService();
        const user = await updateUserService.execute({
            user_id,
            name,
            password,
            role
        })
        return res.json(user);
    }
}
export { UpdateUserController }