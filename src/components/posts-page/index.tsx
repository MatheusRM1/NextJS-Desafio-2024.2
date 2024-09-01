import PostCard from "../posts-card";

export default function PostsPage(){
    return(
        <div className="w-full flex flex-row">
            <PostCard
            imageSrc={"/produtos/Pokemon.png"}
            imageAlt={"Pokemon"}
            title={"Pikachu Pelucia"}
            price={"50,00"}
            id={1}
            />
            <PostCard
            imageSrc={"/produtos/Pokemon.png"}
            imageAlt={"Pokemon"}
            title={"Pikachu Pelucia"}
            price={"50,00"}
            id={1}
            />
            <PostCard
            imageSrc={"/produtos/Pokemon.png"}
            imageAlt={"Pokemon"}
            title={"Pikachu Pelucia"}
            price={"50,00"}
            id={1}
            />
        </div>
    )
}