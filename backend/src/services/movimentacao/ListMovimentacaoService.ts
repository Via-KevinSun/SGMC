import prismaClient from "../../prisma";

interface MovimentacaoRequest{
    movimentacao_id : string
}
class ListMovimentacaoService{
    async execute({ movimentacao_id }: MovimentacaoRequest){
        const movimentacao = await prismaClient.movimentacao.findFirst({
            where:{
                id: movimentacao_id
            }
        });
        return movimentacao;
    }
}
export { ListMovimentacaoService }