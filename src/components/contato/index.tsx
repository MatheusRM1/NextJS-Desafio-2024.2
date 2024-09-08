import { ContactIcon, FacebookIcon, Github, Instagram, LinkedinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Info() {
    return (
        <div className="flex flex-wrap lg:flex-row-reverse w-full text-white justify-center p-5 lg:p-20">

            <Image
                src={'/logo/CodeJr.jpeg'}
                alt="Logo Code"
                width={1920}
                height={1080}
                className="w-52 lg:h-72 lg:w-72 rounded-full mx-20 my-5 lg:my-0" 
            />
            
            <div className="flex flex-col w-full lg:w-[510px]">
                <h1 className="text-center font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-5">
                    Sobre a Empresa
                </h1>
                <p className="p-5 text-base md:text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl w-full">
                    A Code Júnior é uma Empresa Júnior formada por alunos dos cursos de Ciência da Computação, Engenharia Computacional,
                    Sistemas de Informação e Ciências Exatas da Universidade Federal de Juiz de Fora,
                    cujo objetivo é desenvolver aplicações e sistemas para solucionar problemas e otimizar processos,
                    fazendo uso da tecnologia para formar profissionais qualificados e impactar a sociedade.
                </p>

                <h2 className="text-center font-bold  text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-5">
                    Entre em Contato
                </h2>
                <div className="flex flex-wrap justify-center">
                    <Link href="https://codejr.com.br/contato/" target="_blank"><ContactIcon className="m-3"/></Link>
                    <Link href="https://www.instagram.com/codejr/" target="_blank"><Instagram className="m-3"/></Link>
                    <Link href="https://www.linkedin.com/company/codejr/" target="_blank"><LinkedinIcon className="m-3"/></Link>
                    <Link href="https://www.facebook.com/codeempresajunior/" target="_blank"><FacebookIcon className="m-3"/></Link>
                    <Link href="https://github.com/desenvolvedoresCodeJr" target="_blank"><Github className="m-3"/></Link>
                </div>
                <h3 className="text-center font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-5">
                    Endereço
                </h3>
                <p className="text-base md:text-lg xl:text-xl 2xl:text-xl 3xl:text-2xl">
                    Universidade Federal de Juiz de Fora - Faculdade de Engenharia, Juiz de Fora, Minas Gerais BR
                </p>
            </div>
            

        </div>
    )
}