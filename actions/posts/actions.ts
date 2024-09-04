"use server";

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export async function fetchPosts(currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;

  const posts = await prisma.product.findMany({
    where: {},
    orderBy: {
      title: "asc",
    },
    take: itemsPerPage,
    skip: offset,
  });

  const count = await prisma.product.count();

  const totalPages = Math.ceil(count / itemsPerPage);

  return { posts, totalPages };
}
