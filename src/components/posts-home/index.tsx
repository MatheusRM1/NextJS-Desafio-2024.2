import { Post } from "../../../types/home/home";
import PostCard from "../posts-card";

type PostsHomeProps = {
    posts: Post[]
}

export default function PostsHome({posts} : PostsHomeProps){
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
                <PostCard  key={index} post={post}/>
            ))}
        </div>
    )
}