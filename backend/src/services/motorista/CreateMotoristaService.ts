import prismaClient from "../../prisma";

interface MotoristaRequest{
    nome : string,
    documento : string,
    telefone : string
}

class CreateMotoristaService{
    async execute({ nome, documento, telefone }: MotoristaRequest){
        const motorista = await prismaClient.motorista.create({
            data:{
                nome : nome,
                documento : documento,
                telefone : telefone
            }
        })
        return motorista;
    }
}

export { CreateMotoristaService }