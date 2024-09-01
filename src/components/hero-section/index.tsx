import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex w-full flex-wrap lg:flex-row-reverse justify-center py-20">
      <Image
        src={"/logo/IconLogo.png"}
        alt="Icon da Logo"
        width={1920}
        height={1080}
        className="w-32 h-32 lg:h-44 lg:w-32 "
      />
      <div className="flex flex-col w-[1000px] text-center">
        <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold py-5 px-10">
          Descubra o mundo geek em cada byte - Questbyte, sua loja de aventuras
          épicas!
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold lg:px-32">
          Mergulhe em universos fascinantes com nossa coleção de produtos que
          celebra o melhor da cultura pop e geek. De Harry Potter a Star Wars,
          de Marvel a DC Comics, encontre o que você ama e leve para casa um
          pedaço do seu mundo favorito.
        </p>
        <div className="my-5">
        <Link href={'/posts'} className="bg-[#073576] text-white rounded-xl px-5 py-3 w-52 hover:bg-red-600 hover:text-gray-900 transition-all duration-300 font-semibold">
            Explore nossa Coleção
        </Link>
        </div>
      </div>
    </div>
  );
}
