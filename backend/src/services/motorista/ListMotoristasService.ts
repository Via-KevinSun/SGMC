import prismaClient from "../../prisma";

class ListMotoristasService{
    async execute(){
        const motoristas = await prismaClient.motorista.findMany();
        return motoristas;
    }
}
export { ListMotoristasService }