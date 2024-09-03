"use server";

import prisma from "@/lib/db";

export async function fetchPostbyId(id: number) {
  const post = await prisma.product.findUnique({
    where: { id },
        select: {
          id: true,
          title: true,
          price: true,
          description: true,
        },
  });

  return post;
}
