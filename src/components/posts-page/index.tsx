import { Post } from "../../../types/home/home";
import Pagination from "../paginacao";
import PostCard from "../posts-card";
import SecundarySearch from "../secundary-search";

export default function PostsPage({
  posts,
  totalPages,
}: {
  posts: Post[];
  totalPages: number;
}) {
  return (
    <div>
      <SecundarySearch />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className=" w-full flex justify-center items-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
