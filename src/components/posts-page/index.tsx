import { Post } from "../../../types/home/home";
import Pagination from "../paginacao";
import PostCard from "../posts-card";

export default function PostsPage({posts, totalPages}: {posts: Post[], totalPages: number}){
    return(
        <div className="w-full flex flex-wrap">
            {posts.map((post, index) => (
                <PostCard  key={index} post={post} />
            ))}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages}  />
            )}
        </div>
    )
}