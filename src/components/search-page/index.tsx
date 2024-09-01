import Link from "next/link";
import SecundarySearch from "../secundary-search";

export default function SearchPage() {
    const count = 0;

    return(
        <div className="w-full">
            <SecundarySearch count={count}/>
            {count === 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-semibold">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-black/70">
                        Tente outra pesquisa ou volte para <Link href={'/posts'}>publicações</Link>
                    </span>
                </div>
            ):(
                <div className="hidden">

                </div>
            )}
        </div>
    )
}