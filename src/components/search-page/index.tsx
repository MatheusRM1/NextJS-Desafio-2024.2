import Link from "next/link";
import SecundarySearch from "../secundary-search";

export default function SearchPage() {
    const count = 0;

    return(
        <div className="w-full">
            <SecundarySearch count={count}/>
            {count != 0 ? (
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
                </div>
            )}
        </div>
    )
}