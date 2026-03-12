import prismaClient from "../../prisma";

class ListMovimentacoesService{
    async execute(){
        const movimentacao = await prismaClient.movimentacao.findMany({
            select : {
                id : true,
                tipo : true,
                contentorId: true,
                veiculoId: true,
                dataHora: true
            }
        });
        return movimentacao;
    }
}
export { ListMovimentacoesService }