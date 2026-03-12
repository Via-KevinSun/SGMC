import prismaClient from "../../prisma";

class ListVeiculosService{
    async execute(){
        const veiculos = await prismaClient.veiculo.findMany();
        return veiculos;
    }
}
export { ListVeiculosService }