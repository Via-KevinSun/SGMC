import prismaClient from "../../prisma";

interface ContainerRequest{
    container_id: string
}
class RemoveContainerService{
    async execute({container_id}:ContainerRequest){
        const container = await prismaClient.contentor.delete({
            where:{
                id : container_id
            }
        });
        return container;
    }
}
export { RemoveContainerService }