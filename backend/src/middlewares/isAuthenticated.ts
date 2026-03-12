import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// Define a interface para o payload do token, que terá uma propriedade 'sub' (subject)
interface Payload {
    sub: string;
}

// Função middleware que verifica se o usuário está autenticado
export function isAuthenticated( 
    req: Request, 
    res: Response, 
    next: NextFunction
){
    // Pega o token do cabeçalho 'Authorization' da requisição
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end(); // Retorna erro 401 (Não autorizado) se não houver token
    }

    // Divide o cabeçalho em duas partes (ex.: "Bearer token") e pega só o token
    const [, token] = authToken.split(" ");
    try {
        // Verifica se o token é válido usando a chave secreta do ambiente
        const { sub } = verify(token, process.env.JWT_SECRET!) as Payload;
        // Adiciona o 'sub' (ID do usuário) ao objeto Request como 'user_id'
        req.user_id = sub;

        return next(); // Se tudo ok, passa para o próximo middleware ou rota
    } catch (err) {
        return res.status(401).end(); // Retorna erro 401 se o token for inválido ou expirado
    }
}
