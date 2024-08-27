import { CircleDollarSignIcon } from "lucide-react";
import Image from "next/image";

export default function Produtos() {
    return (
        <div className="flex flex-wrap items-center justify-center w-full py-10">
            <div className="w-[250] h-[300px] lg:w-[350px] lg:h-[400px] bg-white rounded-3xl justify-center mx-10">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="object-cover w-44 h-44 lg:w-60 lg:h-60 justify-center rounded-3xl"
                    />
                </div>
                <h1 className="text-center font-bold">
                    Camisa Geek
                </h1>
                <div className="flex flex-wrap hover:text-[#04D733]">
                    <CircleDollarSignIcon className="m-2 "/>
                    <p className="font-semibold my-1">
                        50,00
                    </p>
                </div>
            </div>

            <div className="w-[250] h-[300px] lg:w-[350px] lg:h-[400px] bg-white rounded-3xl justify-center mx-10">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="object-cover w-44 h-44 lg:w-60 lg:h-60 justify-center rounded-3xl"
                    />
                </div>
                <h1 className="text-center font-bold">
                    Camisa Geek
                </h1>
                <div className="flex flex-wrap hover:text-[#04D733]">
                    <CircleDollarSignIcon className="m-2 "/>
                    <p className="font-semibold my-1">
                        50,00
                    </p>
                </div>
            </div>

            <div className="w-[250] h-[300px] lg:w-[350px] lg:h-[400px] bg-white rounded-3xl justify-center mx-10">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="object-cover w-44 h-44 lg:w-60 lg:h-60 justify-center rounded-3xl"
                    />
                </div>
                <h1 className="text-center font-bold">
                    Camisa Geek
                </h1>
                <div className="flex flex-wrap hover:text-[#04D733]">
                    <CircleDollarSignIcon className="m-2 "/>
                    <p className="font-semibold my-1">
                        50,00
                    </p>
                </div>
            </div>

            

            
        </div>
    )
}