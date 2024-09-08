import Link from "next/link";

export default function FormLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-[#E63946] w-[400px] h-[450px] md:w-[600px] md:h-[500px] lg:h-[550px] rounded-3xl">
        <div className="flex flex-col text-white">
          <h1 className="font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl p-5 lg:p-10">
            Entre com sua conta
          </h1>

          <div className="flex flex-col px-8">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Email
            </p>
            <input
              type="email"
              className="w-[300px] h-5  md:h-10 md:w-[500px] rounded-lg text-black my-2 p-5"
            />
          </div>

          <div className="flex flex-col p-8">
            <p className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Senha
            </p>
            <input
              type="password"
              className="w-[300px] h-5 md:h-10 md:w-[500px] rounded-lg text-black p-5"
            />
          </div>

          <div className="flex justify-center hover:text-[#073576]">
            <Link href={'/admin'}>
              <button className="rounded-xl bg-[#073576] w-24 h-12 md:h-16 md:w-[500px] hover:bg-[#A8DADC] transition-all">
                <p className="font-semibold text-xl">Login</p>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
