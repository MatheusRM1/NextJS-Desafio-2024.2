import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="flex w-full flex-wrap lg:flex-row-reverse justify-center py-20">
            <Image 
            src={'/logo/IconLogo.png'}
            alt="Icon da Logo"
            width={1920}
            height={1080}
            className="w-32 h-32 lg:h-44 lg:w-32 "
            />
            <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold py-16 px-10">
                Descubra o mundo geek em cada byte - Questbyte, sua loja de aventuras épicas!
            </h1>
            
        </div>
    )
}