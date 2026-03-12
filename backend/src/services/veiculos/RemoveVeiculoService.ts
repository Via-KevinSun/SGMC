import prismaClient from "../../prisma";

interface VeiculoRequest{
    veiculo_id : string,
}
class RemoveVeiculoService{
    async execute({veiculo_id} : VeiculoRequest){
        const veiculo = await prismaClient.veiculo.delete({
            where:{
                id : veiculo_id
            }
        });
        return veiculo;
    }
}
export { RemoveVeiculoService }