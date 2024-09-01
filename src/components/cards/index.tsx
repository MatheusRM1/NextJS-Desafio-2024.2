type Card = {
    id: number,
    title: string,
    text: string
}

export default function Card({id, title, text} : Card){

    return(
        <div className="flex flex-col lg:flex-row items-center justify-center w-full py-5 my-10">
            <div className="bg-gradient-to-r from-[#073576] from-1% via-black via-50% to-[#073576] to-99% w-[350px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl px-5">
                <div className="flex flex-col text-center">
                    <h2 className="text-white font-semibold py-5 text-xl lg:text-2xl">
                        {title}
                    </h2>
                    <p className="text-white font-light text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}