import PostIndividual from "@/components/post-individual";

export default function Page(){
    return(
        <div className="w-full min-h-screen bg-[#A8DADC]">
            <PostIndividual
            imageSrc={"/produtos/Pokemon.png"}
            imageAlt={"Pokemon"}
            title={"Pikachu Pelucia"}
            price={"50,00"}
            descripiton={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime dicta in necessitatibus quaerat accusamus reiciendis ex nulla doloremque, dolor fugiat."}
            id={1}
            />
        </div>  
    )
}