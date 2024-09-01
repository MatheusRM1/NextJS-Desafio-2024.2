import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Paginacao(){
    return(
        <div className="flex flex-row justify-center items-center">
            <button>
                <ArrowLeftIcon />
            </button>
            <button className="w-8 h-8 rounded-xl bg-red-600 text-xl text-white font-bold my-5">
                1
            </button>
            <button className="w-10 h-10 rounded-xl bg-red-600 text-xl text-white font-bold my-5 mx-2">
                2
            </button>
            <button className="w-8 h-8 rounded-xl bg-red-600 text-xl text-white font-bold my-5">
                3
            </button>
            <button>
                <ArrowRightIcon />
            </button>
        </div>
    )
}