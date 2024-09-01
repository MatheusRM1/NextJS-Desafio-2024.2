import { SearchIcon } from "lucide-react";

type SearchProps = {
    count: number
}

export default function SecundarySearch({count} : SearchProps) {
    return(
        <div>
        <form className="flex basis-full " id="search" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-16 ">
                <div className="relative flex w-[700px] items-center ">
                    <SearchIcon className="w-7 h-7 absolute left-4"/>
                    <input 
                    type="text" 
                    name="serch-input" 
                    id="search-input" 
                    className="w-full rounded-xl px-16 py-6 bg-white transition-all duration-300 "
                    />
                </div>
            </div>
        </form>
        </div>
    )
}