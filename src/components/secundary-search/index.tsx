'use client'

import { SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SecundarySearch() {
    
    const searchParams = useSearchParams();
    const router = useRouter()
    const [secundarySearchTerm, setSecundarySearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if(!query) {
            return 
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/search/?${params.toString()}`)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(secundarySearchTerm)
    }

    useEffect(() => {
        setSecundarySearchTerm(searchParams.get('query') || '')
    }, [searchParams])

    return(
        <form onSubmit={handleSubmit} className="flex basis-full " id="search" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-16 ">
                <div className="relative flex w-[700px] items-center ">
                    <SearchIcon className="w-7 h-7 absolute left-4"/>
                    <input 
                    type="text" 
                    name="serch-input" 
                    id="search-input" 
                    className="w-full rounded-xl px-16 py-6 bg-white transition-all duration-300 "
                    value={secundarySearchTerm}
                    onChange={(e) => setSecundarySearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}