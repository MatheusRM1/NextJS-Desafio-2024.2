import Paginacao from "@/components/paginacao";
import Tabela from "@/components/tabela";

export default function Page(){
    return(
        <div className="w-full bg-[#E63946]">
            <Tabela />
            <Paginacao />
        </div>
    )
}