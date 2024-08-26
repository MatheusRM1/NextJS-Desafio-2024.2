import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="flex w-full flex-wrap justify-center py-20">
            <h1 className="text-white text-2xl lg:text-2xl font-bold py-16 px-10">
                Descubra o mundo geek em cada byte - Questbyte, sua loja de aventuras épicas!
            </h1>
            <Image 
            src={'/logo/IconLogo.png'}
            alt="Icon da Logo"
            width={1920}
            height={1080}
            className="lg:h-44 lg:w-32 xl:h-100 xl:w-60 "
            />
        </div>
    )
}