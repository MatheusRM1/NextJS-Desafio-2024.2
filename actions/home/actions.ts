"use server"

import prisma from "@/lib/db"

// *model Product {
//    id          Int       @id @default(autoincrement())
//    title        String
//    description String?
//    price       Float
//    image       String
//    createdAt   DateTime  @default(now())
//  } 

  
  

export default async function getProdutosHome() {
    const posts = await prisma.product.findMany({
        where: {
            
        },
        select: {
            id: true,
            title: true,
            price: true,
            description: true
        },
        take: 3
    })

    return posts;
}

export async function getCarrossel() {
    const posts = await prisma.product.findMany({
        where: {
            
        },
        select: {
            id: true,
            title: true,
            price: true,
            description: true
        },
        take: 6
    })

    return posts;
}