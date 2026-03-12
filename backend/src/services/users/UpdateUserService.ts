import prismaClient from "../../prisma";
import { Role } from "../../generated/prisma-client";

interface UserRequest {
  user_id: string;
  name: string;
  password: string
  role: Role
}

class UpdateUserService {
  async execute({ user_id, name,password, role }: UserRequest) {
    const user = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        name: name,
        password: password,
        role: role as Role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });
    return user;
  }
}

export { UpdateUserService };
