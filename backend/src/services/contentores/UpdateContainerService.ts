import prismaClient from "../../prisma";
import { TipoContentor,EstadoContentor } from "../../generated/prisma-client";
interface ContainerRequest{
    container_id : string,
    codigo: string,
    tipo: string,
    estado: string
}

class UpdateContainerService{
    async execute({container_id,codigo,tipo,estado}:ContainerRequest){
        const container = await prismaClient.contentor.update({
            where: {
                id: container_id
            },
            data:{
                codigo: codigo,
                tipo: tipo as TipoContentor,
                estado: estado as EstadoContentor
            }
        })
        return container;
    }
}
export { UpdateContainerService }