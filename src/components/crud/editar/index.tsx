'use client'

import Link from "next/link";
import { Post } from "../../../../types/home/home";
import { EditProduto } from "../../../../actions/admin/actions";

export default function FormEditar({post} : {post: Post}) {

const editProdutoComId = EditProduto.bind(null, post?.id)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-[#E63946] w-[370px] h-[600px] lg:w-[600px] lg:h-[600px] rounded-3xl p-10 " action={editProdutoComId}>
        <div className="flex flex-col text-white">
          <h1 className="font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-2">
            Edite seu Produto
          </h1>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Produto
            </p>
            <input
              type="text"
              name="title"
              defaultValue={post?.title}
              className="w-[300px] h-5 lg:h-10 lg:w-[500px] rounded-md text-black my-3 p-5 "
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Preço
            </p>
            <input
              type="text"
              name="price"
              placeholder="Insira o produto"
              defaultValue={post?.price}
              placeholder="Insira o preço"
              className="w-[300px] h-5 lg:h-10 lg:w-[500px] rounded-md text-black my-3 p-5"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Descrição
            </p>
            <textarea
              name="description"
              placeholder="Insira a descrição"
              defaultValue={post?.description}
              className="w-[300px] h-20 lg:h-12 lg:w-[500px] rounded-md text-black my-3 p-5 overflow-y-auto resize-none"
            />
          </div>

          <div className="flex flex-row justify-end md:my-5">
            <Link href={"/admin"}>
              <button className="flex rounded-2xl bg-[#073576] px-4 py-3 m-2 hover:bg-[#A8DADC] hover:text-[#073576] transition-all justify-center items-center">
                <p className="font-semibold text-xl">Cancelar</p>
              </button>
            </Link>
            <button className="rounded-2xl bg-[#073576] px-4 py-3 m-2 hover:bg-[#A8DADC] hover:text-[#073576] transition-all ">
              <p className="font-semibold text-xl">Criar</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
