import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CarrosselCardProps{
    imageSrc: string;
    imageAlt: string;
    id: number;
}

export default function CarroselCard({
    imageSrc, 
    imageAlt,
    id
}:CarrosselCardProps)
{
    return(
        <div className="flex flex-row items-center justify-center w-full my-5">
                <div className="w-20 h-16 lg:w-60 lg:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <Link href={`/post/${id}`} className="flex justify-center py-2">
                        <Image 
                            src={imageSrc}
                            alt={imageAlt}
                            width={300}
                            height={300}
                            className="w-14 h-12 lg:w-32 lg:h-32 justify-center"
                        />
                    </Link>
                </div>
        </div>
    )
}