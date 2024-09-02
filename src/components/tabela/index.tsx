import Link from "next/link";
import { DeletarBotao, EditarBotao, VisualizarBotao } from "./botoes";

export default function Tabela() {
  return (
    <div className="w-full flex flex-col items-center">

      <h1 className="my-10 text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold">
        Gerenciamento de Produtos
      </h1>

      <Link href={"/admin/criar"}>
        <button className=" rounded-lg py-2 px-4 font-semibold bg-[#A8DADC] hover:bg-sky-950 hover:text-sky-200 transition-all duration-300">
          Criar
        </button>
      </Link>
      
      <div className="w-90 min-h-screen  md:w-[1000px] lg:h-[600px] bg-[#A8DADC] my-10 border-2 rounded-md border-black">
        <div>
          <table>
            <thead>
              <tr className="font-bold">
                <td scope="col" className="px-1 md:px-12 py-4">
                  Id
                </td>
                <td scope="col" className="px-1 md:px-12 py-4">
                  Nome
                </td>
                <td scope="col" className="px-1 md:px-12 py-4">
                  Preço(R$)
                </td>
                <td scope="col" className="px-1 md:px-12 py-4">
                  Descrição
                </td>
                <td scope="col" className="px-1 md:px-12 py-4">
                  Ações
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <th className="p-1 font-medium">1</th>
                <th className="p-1 font-medium">Camisa Geek</th>
                <th className="p-1 font-medium">50</th>
                <th className="p-1 font-medium">Lorem ipsum dolor sit amet.</th>
                <th className="p-1 flex items-center gap-1 md:gap-4">
                  <VisualizarBotao id={1} />
                  <EditarBotao id={1} />
                  <DeletarBotao id={1} />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
