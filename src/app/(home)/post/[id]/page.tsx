import PostIndividual from "@/components/post-individual";
import { fetchPostbyId } from "../../../../../actions/post-individual/actions";

export default async function Page({params}: {params: {id: string}}){

    const id = parseInt(params.id, 10);
    
    const post = await fetchPostbyId(id);

    return(
        <div className="w-full min-h-screen bg-[#A8DADC]">
            <PostIndividual post={post} />
        </div>  
    )
}