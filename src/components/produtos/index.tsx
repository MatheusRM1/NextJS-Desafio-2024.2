import { CircleDollarSignIcon } from "lucide-react";
import Image from "next/image";

export default function Produtos() {
    return (
        <div className="flex flex-wrap items-center justify-center w-full py-10">
            <div className="w-[350px] h-[400px] bg-white rounded-3xl justify-center">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="w-60 h-60 justify-center rounded-3xl"
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

            <div className="w-[350px] h-[400px] bg-white rounded-3xl mx-16 justify-center">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="w-60 h-60 justify-center rounded-3xl"
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

            <div className="w-[350px] h-[400px] bg-white rounded-3xl justify-center">
                <div className="flex justify-center">
                    <Image
                        src={'/produtos/Nerd.png'}
                        alt="Produto"
                        width={904}
                        height={904}
                        className="w-60 h-60 justify-center rounded-3xl"
                    />
                </div>
                <h1 className="text-center font-bold">
                    Camisa Geek
                </h1>
                <div className="flex flex-wrap hover:text-[#04D733]">
                    <CircleDollarSignIcon className="m-2"/>
                    <p className="font-semibold my-1">
                        50,00
                    </p>
                </div>
            </div>
        </div>
    )
}