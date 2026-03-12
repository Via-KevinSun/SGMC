import prismaClient from "../../prisma";
import { TipoMovimentacao } from "../../generated/prisma-client";

interface MovimentacaoRequest{
    movimentacao_id : string,
    tipo : string,
    contentor_id : string,
    veiculo_id : string
}

class UpdateMovimentacaoService{
    async execute({movimentacao_id,tipo,contentor_id,veiculo_id}: MovimentacaoRequest){
        const movimentacao = await prismaClient.movimentacao.update({
            where: {
                id: movimentacao_id
            },
            data:{
                tipo : tipo as TipoMovimentacao,
                contentorId : contentor_id,
                veiculoId : veiculo_id
            }
        })
        return movimentacao;
    }
}
export { UpdateMovimentacaoService }