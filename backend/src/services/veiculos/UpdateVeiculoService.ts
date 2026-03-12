import prismaClient from "../../prisma";

interface VeiculoRequest{
    veiculo_id : string,
    placa : string,
    modelo : string,
    motorista_id : string
}

class UpdateVeiculoService{
    async execute({veiculo_id,placa,modelo,motorista_id}:VeiculoRequest){
        const veiculo = await prismaClient.veiculo.update({
            where: {
                id: veiculo_id
            },
            data:{
                placa: placa,
                modelo: modelo,
                motoristaId: motorista_id
            }
        })
        return veiculo;
    }
}
export { UpdateVeiculoService }