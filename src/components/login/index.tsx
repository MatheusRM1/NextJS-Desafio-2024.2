export default function FormLogin(){
    return(
        <div className="flex items-center justify-center min-h-screen">
                <form className="bg-[#E63946] w-[600px] h-[600px] rounded-3xl">
                    <div className="flex flex-col text-white">

                        <h1 className="font-bold text-center text-3xl p-10">
                            Entre com sua conta
                        </h1>

                        <div className="flex flex-col px-8">
                            <p className="font-semibold text-2xl">
                                Email
                            </p>
                            <input type="email" className="h-10 w-[500px] rounded-xl text-black my-2 p-5" />
                        </div>

                        <div className="flex flex-col p-8">
                            <p className="font-semibold text-2xl ">
                                Senha
                            </p>
                            <input type="password" className="h-10 w-[500px] rounded-lg text-black my-2 p-5" />
                        </div>

                        <div className="flex justify-center hover:text-[#073576]">
                            <button className="rounded-xl bg-[#073576] h-16 w-[500px] hover:bg-[#A8DADC] transition-all">
                                <p className="font-semibold text-xl">Login</p>
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    )
}