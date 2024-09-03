import { CircleDollarSign, DollarSignIcon, LucideDollarSign } from "lucide-react";
import Image from "next/image";
import { IndividualPost, Post } from "../../../types/home/home";

export default function PostIndividual({post} : {post : IndividualPost}){
    return(
        <div className="w-full flex flex-col py-10 lg:flex-row justify-center items-center min-h-screen">
            <Image
              src={post?.image || '/produtos/Capitao.png'}
              alt={'Produto'}
              width={904}
              height={904}
              className=" w-44 h-44 md:w-80 md:h-80 rounded-3xl"
            />
            <div className="bg-red-600 w-full md:w-[500px] p-5 m-10 text-white rounded-3xl">
                <div>
                    <h1 className="font-bold my-2  text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                        Produto:
                    </h1>
                    <p className="font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
                        {post?.title}
                    </p>
                    <h2 className="font-bold my-2">
                        Preço:
                    </h2>
                    <div className="flex flex-row">
                        <CircleDollarSign className="my-1"/>
                        <p className="font-semibold mx-1 text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
                            {post?.price}
                        </p>
                    </div>
                    <h3 className="font-bold my-2">
                        Descrição:
                    </h3>
                        <p className="font-normal text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
                            {post?.description}
                        </p>
                </div>
            </div>
        </div>
    )
}