export type Post = {
    id?: true,
    title?: true,
    price?: true,
    description?: true,
    image: true
}

export type IndividualPost = {
    id?: true;
    title?: true;
    price?: true;
    description?: true;
    image: true;
} | null;