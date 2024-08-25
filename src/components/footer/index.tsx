'use client'

import { Facebook, Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <div className="bg-[#073576] text-center w-full min-[250px] py-8 flex gap-96 items-center justify-center">
            
            <div className="flex flex-col">
                <p className="text-white font-semibold text-2xl text-center">Redes Sociais</p>
                <div className="flex flex-wrap justify-center p-5">

                    <Link href={'https://br.linkedin.com/'} target="_blank">
                        <Linkedin href='https://www.facebook.com/' className="text-white h-7 w-7"/>
                    </Link>

                    <Link href={'https://www.facebook.com/'} target="_blank">
                        <Facebook className="text-white h-7 w-7 mx-4"/>
                    </Link>

                    <Link href={'https://github.com/'} target="_blank">
                        <Github className="text-white h-7 w-7"/>
                    </Link>
                </div>
            </div>

            <Image 
            src={'/logo/logo.png'}
            width={904}
            height={904}
            alt="Logo da Loja"
            className="h-20 w-80 justify-center"
            />

            <div className="flex flex-col">
                <p className="text-2xl font-semibold text-white">Sobre nós</p>
                <p className="text-xl font-light text-white py-4">Quem somos nós</p>
                <p className="text-xl font-light text-white">Entre em contato</p>

            </div>


        </div>
    )
}