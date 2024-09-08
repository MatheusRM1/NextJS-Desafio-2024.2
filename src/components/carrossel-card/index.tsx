import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../types/home/home";

type CarrosselCardProps = {
    post: Post
}

export default function CarroselCard({post} : CarrosselCardProps)
{
    return(
        <div className="flex flex-row items-center justify-center w-full my-5">
                <div className="w-20 h-16 md:w-60 md:h-40 bg-white rounded-3xl mx-2 lg:mx-5">
                    <Link href={`/post/${post.id}`} className="flex justify-center py-2">
                        <Image 
                            src={'/produtos/Moletom.png'}
                            alt={'Produto'}
                            width={300}
                            height={300}
                            className="w-14 h-12 md:w-32 md:h-32 justify-center"
                        />
                    </Link>
                </div>
        </div>
    )
}