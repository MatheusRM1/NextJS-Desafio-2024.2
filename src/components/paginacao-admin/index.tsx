import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function PaginacaoAdmin(){
    return(
        <div className="flex flex-row justify-center items-center text-white">
            <button>
                <ArrowLeftIcon />
            </button>
            <button className="w-8 h-8 rounded-xl bg-[#073576] text-xl font-bold my-5 mx-2">
                1
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#073576] text-xl font-bold my-5 mx-2">
                2
            </button>
            <button className="w-8 h-8 rounded-xl bg-[#073576] text-xl font-bold my-5 mx-2">
                3
            </button>
            <button>
                <ArrowRightIcon />
            </button>
        </div>
    )
}