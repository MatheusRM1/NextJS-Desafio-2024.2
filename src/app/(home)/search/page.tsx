import SearchPage from "@/components/search-page";
import fetchFilteredPosts from "../../../../actions/search/actions";

export default async function Page({searchParams, }: {searchParams: {query?: string; page?: string}}){
    const query = searchParams?.query || ''
    const currentpage = Number(searchParams?.page ) || 1

    const {posts, count, totalPages} = await fetchFilteredPosts(query, currentpage)

    return(
        <div className="w-full bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] min-h-screen md:p-0 ">
            <SearchPage count={count} posts={posts} totalPages={totalPages}/>
        </div>
    )
}