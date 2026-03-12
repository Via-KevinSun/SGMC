import { Request,Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController{
    async handle(req:Request,res:Response){
        const {email , password} = req.body;
        const authUserService = new AuthUserService();

    // Chama o método execute do serviço, passando email e senha, e aguarda o resultado
    const auth = await authUserService.execute({
      email,
      password
    })

    // Retorna o resultado do serviço (objeto com dados do usuário e token) como resposta JSON
    return res.json(auth);
    }
}

export { AuthUserController }