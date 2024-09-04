import Link from "next/link";
import { CreateProduto } from "../../../../actions/admin/actions";

export default function FormCriar() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form action={CreateProduto}  className="bg-[#E63946] w-[370px] h-[600px] md:w-[600px] md:h-[600px] rounded-3xl p-10">
        <div className="flex flex-col text-white">
          <h1 className="font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-2">
            Crie seu Produto
          </h1>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Produto
            </p>
            <input
              type="text"
              name="title"
              placeholder="Insira o nome do produto"
              className="w-[300px] h-5 md:h-10 md:w-[500px] rounded-md text-black my-3 p-5 "
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Preço
            </p>
            <input
              type="number"
              name="price"
              placeholder="Insira o preço"
              className="w-[300px] h-5 md:h-10 md:w-[500px] rounded-md text-black my-3 p-5"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Descrição
            </p>
            <textarea
              name="description"
              placeholder="Insira a descrição"
              className="w-[300px] h-20 md:h-12 md:w-[500px] rounded-md text-black my-3 p-5 overflow-y-auto resize-none"
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
