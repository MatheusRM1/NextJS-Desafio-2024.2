import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Carrosel()
{
    return(
        <section className="flex flex-wrap items-center justify-center w-full my-10">
            <button>
                <ArrowLeftIcon />
            </button>
                <div className="w-52 h-32 xl:w-80 xl:h-52 bg-white rounded-3xl mx-10 justify-center">
                    <div className="flex justify-center">
                        <Image 
                            src={'/produtos/Nerd.png'}
                            alt="Produto"
                            width={300}
                            height={300}
                            className="w-32 h-32 xl:w-24 xl:h-24 justify-center"
                        />
                    </div>
                </div>
                <div className="w-52 h-32   xl:w-80 xl:h-52 bg-white rounded-3xl mx-10">
                    <div className="flex justify-center">
                        <Image 
                            src={'/produtos/Game.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-32 h-32 xl:w-24 xl:h-24"
                        />
                    </div>
                </div>
                <div className="w-52 h-32   xl:w-80 xl:h-52 bg-white rounded-3xl mx-10">
                    <div className="flex justify-center">
                        <Image 
                            src={'/produtos/Pokemon.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-32 h-32 xl:w-24 xl:h-24"
                        />
                    </div>
                </div>
                <div className="w-52 h-32   xl:w-80 xl:h-52 bg-white rounded-3xl mx-10">
                    <div className="flex justify-center">
                        <Image 
                            src={'/produtos/Capitao.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-32 h-32 xl:w-24 xl:h-24"
                        />
                    </div>
                </div>
            <button>
                <ArrowRightIcon />
            </button>
        </section>
    )
}