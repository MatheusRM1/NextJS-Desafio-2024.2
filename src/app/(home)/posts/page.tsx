import PostsPage from "@/components/posts-page";
import { fetchPosts } from "../../../../actions/posts/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
  }
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const { posts, totalPages } = await fetchPosts(currentPage);

  return (
    <div className="bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] min-h-screen md:p-0 ">
      <PostsPage posts={posts} totalPages={totalPages}/>
    </div>
  );
}
