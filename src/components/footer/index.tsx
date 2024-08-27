'use client'

import { Facebook, Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <div className="bg-[#073576] text-center w-full min-[250px] p-10 lg:flex lg:gap-32 items-center justify-center">
            <div className="flex flex-col">
                <p className="text-white font-semibold text-xl text-center py-2">Redes Sociais</p>
                <div className="flex flex-wrap justify-center">
                    <Link href={'https://br.linkedin.com/'} target="_blank">
                        <Linkedin href='https://www.facebook.com/' className="text-white h-5 w-5 mx-1"/>
                    </Link>

                    <Link href={'https://www.facebook.com/'} target="_blank">
                        <Facebook className="text-white h-5 w-5 mx-1"/>
                    </Link>

                    <Link href={'https://github.com/'} target="_blank">
                        <Github className="text-white h-5 w-5 mx-1"/>
                    </Link>

                    <Link href={'https://instagram.com/'} target="_blank">
                        <Instagram className="text-white h-5 w-5 mx-1"/>
                    </Link>

                </div>
            </div>

            <Image 
            src={'/logo/logo.png'}
            width={904}
            height={904}
            alt="Logo da Loja"
            className="w-52 h-14 lg:h-20 lg:w-80 my-6"
            />

            <div className="flex flex-col">
                <p className="text-xl font-semibold text-white">Sobre nós</p>
                <p className="text-lg font-light text-white py-4">Quem somos nós</p>
                <p className="text-lg font-light text-white">Entre em contato</p>

            </div>
        </div>
    )
}