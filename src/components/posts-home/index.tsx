import { Post } from "../../../types/home/home";
import PostCard from "../posts-card";

type PostsHomeProps = {
    posts: Post[]
}

export default function PostsHome({posts} : PostsHomeProps){
    return(
        <div className="w-full flex flex-col md:flex-row">
            {posts.map((post, index) => (
                <PostCard  key={index} post={post}/>
            ))}
        </div>
    )
}