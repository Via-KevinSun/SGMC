import prismaClient from "../../prisma";

interface MotoristaRequest{
    motorista_id : string,
    nome : string,
    documento : string,
    telefone : string
}

class UpdateMotoristaService{
    async execute({motorista_id,nome,documento,telefone} : MotoristaRequest){
        const motorista = await prismaClient.motorista.update({
            where: {
                id: motorista_id
            },
            data:{
                nome: nome,
                documento: documento,
                telefone: telefone
            }
        })
        return motorista;
    }
}
export { UpdateMotoristaService }