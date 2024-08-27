import { SearchIcon } from "lucide-react";

export default function Search() {
    return(
        <form className="flex basis-full " autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-16 ">
                <div className="relative flex w-[700px] items-center ">
                    <SearchIcon className="w-7 h-7 absolute left-4"/>
                    <input 
                    type="text" 
                    name="serach" 
                    id="search" 
                    className="w-full rounded-xl px-16 py-6 bg-white transition-all duration-300 "
                    />
                </div>

            </div>
        </form>
    )
}