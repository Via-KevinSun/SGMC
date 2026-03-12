import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { Role } from "../../generated/prisma-client";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  role: string; // ainda é string, mas vamos converter
}

class CreateUserService {
  async execute({ name, email, password, role }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: { email }
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    //
    if (!Object.values(Role).includes(role as Role)) {
      throw new Error("Invalid role");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        role: role as Role
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return user;
  }
}

export { CreateUserService };
