import prismaClient from "../../prisma";

interface ZonaRequest{
    nome : string
}

class CreateZonaService{
    async execute({ nome }: ZonaRequest){
        const zona = await prismaClient.zona.create({
            data:{
                nome : nome
            }
        })
        return zona;
    }
}

export { CreateZonaService }