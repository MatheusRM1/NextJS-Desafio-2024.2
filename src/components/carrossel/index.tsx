import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Carrosel()
{
    return(
        <section className="flex flex-wrap items-center justify-center w-full my-5">
            <button>
                <ArrowLeftIcon className="hidden lg:block"/>
            </button>
                <div className="w-20 h-16 lg:w-60 lg:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <div className="flex justify-center py-2">
                        <Image 
                            src={'/produtos/Nerd.png'}
                            alt="Produto"
                            width={300}
                            height={300}
                            className="w-14 h-12 lg:w-32 lg:h-32 justify-center"
                        />
                    </div>
                </div>
                <div className="w-20 h-16  lg:w-60 lg:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <div className="flex justify-center py-2">
                        <Image 
                            src={'/produtos/Game.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-14 h-12 lg:w-32 lg:h-32"
                        />
                    </div>
                </div>
                <div className="w-20 h-16 lg:w-60 lg:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <div className="flex justify-center py-2">
                        <Image 
                            src={'/produtos/Pokemon.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-14 h-12 lg:w-32 lg:h-32"
                        />
                    </div>
                </div>

                <div className="w-20 h-16 lg:w-60 lg:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <div className="flex justify-center py-2">
                        <Image 
                            src={'/produtos/Pokemon.png'}
                            alt="Produto"
                            width={1920}
                            height={1080}
                            className="w-14 h-12 lg:w-32 lg:h-32"
                        />
                    </div>
                </div>
            <button>
                <ArrowRightIcon className="hidden lg:block"/>
            </button>
        </section>
    )
}