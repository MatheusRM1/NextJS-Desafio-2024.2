'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const links = [
    {href: '/', label: 'Home'},
    {href: '/posts', label: 'Produtos'},
    {href: '/admin', label: 'Gerenciamento'},
    {href: '/contato', label: 'Contato'}, 
      
]

const linkbuttom = [
    {href: '/login', label: 'Login'} 
]

export default function Header(){
    const[isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen)


    return (
        <header className="bg-blue-900 top-0 w-full sticky z-20 mx-auto md:p-0 mb-8">
            <div className="flex flex-wrap w-full p-5 justify-between items-center md:w-10/12 mx-auto">
                <Link href='/' className="flex">
                    <Image 
                    src={'/logo/Logo.png'}
                    alt={"Logo da Loja"}
                    width={904}
                    height={904}
                    className="h-12 w-52"
                    />
                </Link>
                <nav className="flex justify-end">
                    <div className="hidden w-full md:flex justify-end items-center gap-16">
                        {links.map((link, index) => 
                        <Link href={link.href} key={index}>
                            <span className="text-xl text-white font-semibold px-8 hover:text-red-600 transition-all">{link.label}</span>
                        </Link>
                        )}

                        {linkbuttom.map((link, index) => 
                        <Link href={link.href} key={index}>
                            <button className="text-xl text-white bg-red-500 font-semibold p-3 mx-2 hover:bg-blue-400  transition-all rounded-3xl">{link.label}</button>
                        </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}