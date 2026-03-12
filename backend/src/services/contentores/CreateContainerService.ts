import prismaClient from "../../prisma";
import { EstadoContentor, TipoContentor } from "../../generated/prisma-client";

interface ContainerRequest {
  codigo: string;
  tipo: string;
  estado: string;
  zona_id: string;
}
class CreateContainerService {
  async execute({ codigo, tipo, estado, zona_id }: ContainerRequest) {
    // Verificacoes do codigo(se foi inserido, se ja existe)
    if (!codigo) {
      throw new Error("Incorrect Code");
    }
    const codeAlreadyExists = await prismaClient.contentor.findFirst({
      where: { codigo }
    });
    if (codeAlreadyExists) {
      throw new Error("code already exists");
    }

    const container = await prismaClient.contentor.create({
        data:{
            codigo : codigo,
            tipo : tipo as TipoContentor,
            estado : estado as EstadoContentor,
            zonaId : zona_id 
        }
    });
    return container;
  }
}
export { CreateContainerService };
