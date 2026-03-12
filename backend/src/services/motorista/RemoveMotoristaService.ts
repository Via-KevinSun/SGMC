import prismaClient from "../../prisma";

interface MotoristaRequest{
    motorista_id: string
}
class RemoveMotoristaService{
    async execute({motorista_id}:MotoristaRequest){
        const motorista = await prismaClient.motorista.delete({
            where:{
                id : motorista_id
            }
        });
        return motorista;
    }
}
export { RemoveMotoristaService }