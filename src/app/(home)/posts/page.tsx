import Paginacao from "@/components/paginacao";
import Produtos from "@/components/posts-card";
import PostsPage from "@/components/posts-page";
import Search from "@/components/search-page";

export default function Page() {
  return (
    <div className="bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] min-h-screen md:p-0 ">
      <Search/>
        <PostsPage />
        <Paginacao />
    </div>
  );
}
