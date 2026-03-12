import prismaClient from "../../prisma";

interface VeiculoRequest{
    placa : string,
    modelo : string,
    motorista_id : string
}

class CreateVeiculoService{
    async execute({ placa, modelo, motorista_id }: VeiculoRequest){
        const veiculo = await prismaClient.veiculo.create({
            data:{
                placa : placa,
                modelo : modelo,
                motoristaId : motorista_id
            }
        })
        return veiculo;
    }
}

export { CreateVeiculoService }