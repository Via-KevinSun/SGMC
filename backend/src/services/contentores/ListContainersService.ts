import prismaClient from "../../prisma";

class ListContainersService{
    async execute(){
        const containers = await prismaClient.contentor.findMany();
        return containers;
    }
}
export { ListContainersService }