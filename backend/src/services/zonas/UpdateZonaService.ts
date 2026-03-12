import prismaClient from "../../prisma";

interface ZonaRequest{
    zona_id : string,
    nome: string,
}

class UpdateZonaService{
    async execute({zona_id,nome}:ZonaRequest){
        const zona = await prismaClient.zona.update({
            where: {
                id: zona_id
            },
            data:{
                nome: nome
            }
        })
        return zona;
    }
}
export { UpdateZonaService }