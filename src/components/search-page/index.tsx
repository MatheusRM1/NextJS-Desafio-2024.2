import Link from "next/link";
import SecundarySearch from "../secundary-search";
import PostCard from "../posts-card";
import { Post } from "../../../types/home/home";
import Paginacao from "../paginacao";
import Pagination from "../paginacao";

export default function SearchPage({posts, count, totalPages}: {posts: Post[], count: number, totalPages: number}) {

    console.log(totalPages);
    
    return(
        <div className="w-full">
            <SecundarySearch count={count}/>
            {count === 0 ? (
                <div className="w-full flex flex-col text-center">
                    <span className="text-2xl lg:text-xl font-semibold">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl lg:text-lg text-black/70">
                        Tente outra pesquisa ou volte para <Link href={'/posts'}>publicações</Link>
                    </span>
                </div>
            ):(
                <div className="w-full text-center">
                <span className="text-black/70">
                    Total de {count} publicações encontradas
                </span>
                    <div className="w-full flex flex-wrap gap-12">
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post}/>
                        ))}
                        {totalPages > 1 &&  (
                            <Pagination totalPages={totalPages}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}