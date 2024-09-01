import { CircleDollarSignIcon } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
}

export default function PostCard({
  imageSrc,
  imageAlt,
  title,
  price,
}: PostCardProps) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full py-10 transition-all">
      <div className="w-[250px] h-[300px] lg:w-[350px] lg:h-[400px] bg-white rounded-3xl justify-center mx-10 hover:text-[#04D733]">
        <div className="relative group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={904}
            height={904}
            className=" w-44 h-44 lg:w-60 lg:h-60 justify-center rounded-3xl mx-5"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 flex items-center justify-center text-white p-4 rounded-3xl h-[300px] lg:h-[400px] opacity-0 group-hover:opacity-100">
            <div>
              <h1 className="text-sm mt-3 font-bold">Descrição:</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet. Qui consectetur fugiat id
                delectus  Lorem ipsum dolor sit amet. Qui consectetur fugiat id
                delectus  Lorem ipsum dolor sit amet. Qui consectetur fugiat id
                delectus  Lorem ipsum dolor sit amet. Qui consectetur fugiat id
                delectus 
              </p>
            </div>
          </div>
          <h2 className="text-center font-bold">{title}</h2>
          <div className="flex flex-row">
            <CircleDollarSignIcon className="m-2" />
            <p className="font-semibold my-1">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
