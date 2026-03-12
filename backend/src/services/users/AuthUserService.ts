import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Busca no banco de dados um usuário com o email fornecido
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    // Se o usuário não for encontrado, lança um erro
    if (!user) {
      throw new Error("User/password incorrect");
    }

    // Compara a senha fornecida com a senha criptografada armazenada no banco
    const passwordMatch = await compare(password, user.password);

    // Se a senha não corresponder, lança um erro
    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    // Gera um token JWT contendo nome e email do usuário
    const token = sign(
      {
        name: user.name,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET!, // Usa a chave secreta do arquivo .env para assinar o token
      {
        subject: user.id, // Define o ID do usuário como o "subject" do token
        expiresIn: "30d", // Define que o token expira em 30 dias
      }
    );

    // Retorna um objeto com os dados do usuário (id, nome, email) e o token gerado
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
      role: user.role
    };
  }
}

export { AuthUserService };
