export type Post = {
    id?: number,
    title?: string,
    price?: number,
    description?: string | null,
} | null;

export type IndividualPost = {
    id?: number;
    title?: string;
    price?: number;
    description?: string | null;
} | null;