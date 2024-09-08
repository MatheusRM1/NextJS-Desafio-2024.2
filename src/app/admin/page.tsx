"use server"

import Tabela from "@/components/tabela";
import { fetchProdutos } from "../../../actions/admin/actions";

export default async function Page(){

    const { posts , count} = await fetchProdutos()

    return(
        <div className="w-full bg-[#E63946]">
            <Tabela posts={posts} count={count}/>
        </div>
    )
}