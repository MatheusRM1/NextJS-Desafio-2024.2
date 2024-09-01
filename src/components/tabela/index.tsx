export default function Tabela(){
    return(
        <div className="w-full  flex  flex-col items-center">
                <h1 className="my-10 text-white text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold">
                    Gerenciamento de Produtos
                </h1>
            <div className="w-[1000px] h-[600px] bg-[#A8DADC] my-10">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nome</td>
                                <td>Preço</td>
                                <td>Descrição</td>
                                <td>Ações</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}