import prismaClient from "../../prisma";

class ListZonasService{
    async execute(){
        const zonas = await prismaClient.zona.findMany();
        return zonas;
    }
}
export { ListZonasService }