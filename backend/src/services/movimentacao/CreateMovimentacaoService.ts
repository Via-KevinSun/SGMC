import prismaClient from "../../prisma";
import { TipoMovimentacao } from "../../generated/prisma-client";

interface MovimentacaoRequest{
    tipo : string,
    contentor_id : string,
    veiculo_id : string
}

class CreateMovimentacaoService{
    async execute({ tipo, contentor_id, veiculo_id }: MovimentacaoRequest){
        const movimentacao = await prismaClient.movimentacao.create({
            data:{
                tipo: tipo as TipoMovimentacao,
                contentorId : contentor_id,
                veiculoId : veiculo_id
            }
        })
        return movimentacao;
    }
}

export { CreateMovimentacaoService }