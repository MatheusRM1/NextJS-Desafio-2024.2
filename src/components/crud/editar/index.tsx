const title = 'titulo'
const preco = '20'
const descricao = 'descrição'


export default function FormEditar(){
    return(
        <div className="flex items-center justify-center min-h-screen">
                <form className="bg-[#E63946] w-[370px] h-[600px] lg:w-[600px] lg:h-[600px] rounded-3xl p-10">
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
                            name="name" 
                            placeholder="Insira o nome do produto" 
                            defaultValue={title}
                            className="w-[300px] h-5 lg:h-10 lg:w-[500px] rounded-md text-black my-3 p-5 " />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                                Preço
                            </p>
                            <input 
                            type="text" 
                            name="preco"
                            defaultValue={preco}
                            placeholder="Insira o preço" 
                            className="w-[300px] h-5 lg:h-10 lg:w-[500px] rounded-md text-black my-3 p-5" />
                        </div>

                        <div className="flex flex-col">
                            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                                Descrição
                            </p>
                            <textarea 
                            name="descricao"
                            placeholder="Insira a descrição" 
                            defaultValue={descricao}
                            className="w-[300px] h-20 lg:h-12 lg:w-[500px] rounded-md text-black my-3 p-5 overflow-y-auto resize-none" />
                        </div>

                        <div className="flex justify-center hover:text-[#073576] my-3">
                            <button className="rounded-xl bg-[#073576] w-24 h-12 lg:h-16 lg:w-[500px] hover:bg-[#A8DADC] transition-all">
                                <p className="font-semibold text-xl">Salvar</p>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    )
}