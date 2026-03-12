import prismaClient from "../../prisma";

interface ZonaRequest{
    zona_id: string
}
class RemoveZonaService{
    async execute({zona_id}:ZonaRequest){
        const zona = await prismaClient.zona.delete({
            where:{
                id : zona_id
            }
        });
        return zona;
    }
}
export { RemoveZonaService }