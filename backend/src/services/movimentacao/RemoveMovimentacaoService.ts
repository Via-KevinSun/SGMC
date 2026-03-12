import prismaClient from "../../prisma";

interface MovimentacaoRequest{
    movimentacao_id : string
}

class RemoveMovimentacaoService{
    async execute({movimentacao_id} : MovimentacaoRequest){
        const movimentacao = await prismaClient.movimentacao.delete({
            where:{
                id : movimentacao_id
            }
        });
        return movimentacao;
    }
}
export { RemoveMovimentacaoService }