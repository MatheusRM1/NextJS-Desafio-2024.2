import Paginacao from "@/components/paginacao";
import PaginacaoAdmin from "@/components/paginacao-admin";
import Tabela from "@/components/tabela";

export default function Page(){
    return(
        <div className="w-full bg-[#E63946]">
            <Tabela />
            <PaginacaoAdmin />
        </div>
    )
}