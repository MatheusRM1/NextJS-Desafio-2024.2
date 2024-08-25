export default function FormLogin(){
    return(
        <div className="flex items-center justify-center min-h-screen">
                <form className="bg-[#E63946] w-[700px] h-[650px] rounded-3xl">
                    <div className="flex flex-col text-white">

                        <h1 className="font-bold text-center text-3xl p-10">
                            Entre com sua conta
                        </h1>

                        <div className="flex flex-col p-8">
                            <p className="font-semibold text-2xl">
                                Email
                            </p>
                            <input type="email" className="h-16 w-[630px] rounded-xl text-black my-5 p-5" />
                        </div>

                        <div className="flex flex-col p-8">
                            <p className="font-semibold text-2xl ">
                                Senha
                            </p>
                            <input type="password" className="h-16 w-[630px] rounded-lg text-black my-5 p-5" />
                        </div>

                        <div className="flex justify-center hover:text-[#073576] my-10">
                            <button className="rounded-xl bg-[#073576] h-16 w-[630px] hover:bg-[#A8DADC] transition-all">
                                <p className="font-semibold text-xl">Login</p>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    )
}