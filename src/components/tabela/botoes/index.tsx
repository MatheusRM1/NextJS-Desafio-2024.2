import { DeleteIcon, EditIcon, ViewIcon } from "lucide-react";
import Link from "next/link";

export function VisualizarBotao({id} : { id : number }){
    return(
        <Link href={`/post/${id}`}>
            <button className=" rounded-full bg-sky-600 p-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <ViewIcon />
            </button>
        </Link>
    )
}

export function EditarBotao({id} : { id : number }){
    return(
        <Link href={`/admin/editar/${id}`}>
            <button className=" rounded-full bg-sky-600 p-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <EditIcon />
            </button>
        </Link>
    )
}

export function DeletarBotao({id} : { id : number }){
    return(
            <button className="rounded-full bg-sky-600 px-1 py-1 hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
                <DeleteIcon />
            </button>
    )
}