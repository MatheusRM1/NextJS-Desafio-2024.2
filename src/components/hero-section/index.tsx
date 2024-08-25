import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="flex w-full flex-wrap justify-center">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold p-20">
                Descubra o mundo geek em cada byte - Questbyte, sua loja de aventuras épicas!
            </h1>
            <Image 
            src={'/logo/IconLogo.png'}
            alt="Icon da Logo"
            width={1920}
            height={1080}
            className="h-100 w-60"
            />
        </div>
    )
}