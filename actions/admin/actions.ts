"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchProdutos() {
    const posts = await prisma.product.findMany({
        orderBy: {
            id: "asc",
        },
    });

    const count = await prisma.product.count();

    return {posts, count};
}

export async function DeleteProduto(id: number | undefined) {
    await prisma.product.delete({
        where: { id },
    });

    revalidatePath("/admin")
}

export async function CreateProduto(formData: FormData) {
    const title = formData.get("title") as string;
    const priceString = formData.get("price") as string;
    const description = formData.get("description") as string;

    const price = parseFloat(priceString);

    await prisma.product.create({
        data: {
            title,
            price,
            description,
        }
    })

    redirect("/admin")
}

export async function EditProduto(id: number | undefined, formData: FormData) {
    const title = formData.get("title") as string;
    const priceString = formData.get("price") as string;
    const description = formData.get("description") as string;

    const price = parseFloat(priceString);

    await prisma.product.update({
        where: { id }, 
        data: {
            title,
            price,
            description,
        }
    })

    redirect("/admin")
}