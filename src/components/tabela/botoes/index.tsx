import { DeleteIcon, EditIcon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { DeleteProduto } from "../../../../actions/admin/actions";

export function VisualizarBotao({id} : { id : number | undefined }){
    return(
        <Link href={`/post/${id}`}>
            <button className=" rounded-full bg-sky-600 p-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <ViewIcon />
            </button>
        </Link>
    )
}

export function EditarBotao({id} : { id : number | undefined }){
    return(
        <Link href={`/admin/editar/${id}`}>
            <button className=" rounded-full bg-sky-600 p-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <EditIcon />
            </button>
        </Link>
    )
}

export function DeletarBotao({id} : { id : number | undefined }){
    return(
            <button onClick={() => DeleteProduto(id)} className="rounded-full bg-sky-600 px-1 py-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <DeleteIcon />
            </button>
    )
}